using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Waggle.Configuration;
using Waggle.Models.DTOs.Requests;
using Waggle.Models.DTOs.Responses;
using Waggle.Data;
using Waggle.Models;
using Microsoft.EntityFrameworkCore;

namespace Waggle.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthManagementController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JwtConfig _jwtConfig;
        private readonly TokenValidationParameters _tokenValidationParams;
        private readonly WaggleContext _context;

        public AuthManagementController(
            UserManager<ApplicationUser> userManager,
            IOptionsMonitor<JwtConfig> optionsMonitor,
            TokenValidationParameters tokenValidationParams,
            WaggleContext context)
        {
            _userManager = userManager;
            _jwtConfig = optionsMonitor.CurrentValue;
            _tokenValidationParams = tokenValidationParams;
            _context = context;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationDto user)
        {
            Console.WriteLine("email is " + user.Email);
            Console.WriteLine("username is " + user.Username);
            Console.WriteLine("password is " + user.Password);
            Console.WriteLine("Register endpoint was hit");
            if (ModelState.IsValid)
            {
                var existingUser = await _userManager.FindByEmailAsync(user.Email);

                if (existingUser != null)
                {
                    Console.WriteLine("user exists already");
                    return BadRequest(new RegistrationResponse() {
                        Errors = new List<string>() {
                            "Email already in use"
                        },
                        Success = false
                    });
                }

                var newUser = new ApplicationUser() { Email = user.Email, UserName = user.Username };
                var isCreated = await _userManager.CreateAsync(newUser, user.Password);
                if (isCreated.Succeeded)
                {
                    var jwt = await GenerateJwt(newUser);
                    Console.WriteLine("Returning jwt" + jwt.Token + jwt.UserId);
                    return Ok(jwt);
                }
                else
                {
                    Console.WriteLine("whoops");
                    return BadRequest(new RegistrationResponse(){
                        Errors = isCreated.Errors.Select(x => x.Description).ToList(),                 
                        Success = false
                    });
                }
            }

            return BadRequest(new RegistrationResponse(){
                Errors = new List<string>(){
                    "Invalid payload"
                },
                Success = false
            });
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] UserLoginRequest user)
        {
            if (ModelState.IsValid)
            {
                var existingUser = await _userManager.FindByEmailAsync(user.Email);

                if (existingUser == null)
                {
                    return BadRequest(new RegistrationResponse()
                    {
                        Errors = new List<string>()
                        {
                            "Invalid login request"
                        },
                        Success = false
                    });
                }

                var passwordIsCorrect = await _userManager.CheckPasswordAsync(existingUser, user.Password);

                if (!passwordIsCorrect)
                {
                    return BadRequest(new RegistrationResponse()
                    {
                        Errors = new List<string>()
                        {
                            "Invalid payload"
                        },
                        Success = false
                    });
                }

                var jwt = await GenerateJwt(existingUser);

                return Ok(jwt);
            }

            return BadRequest(new RegistrationResponse()
            {
                Errors = new List<string>()
                        {
                            "Invalid payload"
                        },
                Success = false
            });
        }
        
        [HttpPost]
        [Route("RefreshToken")]
        public async Task<IActionResult> RefreshToken([FromBody] TokenRequest tokenRequest)
        {
            if (ModelState.IsValid)
            {
                var result = await VerifyAndGenerateToken(tokenRequest);
                if (result == null)
                {
                    return BadRequest(new RegistrationResponse()
                    {
                        Errors = new List<string>()
                        {
                            "Invalid tokens"
                        },
                        Success = false
                    });
                }

                return Ok(result);
            }

            return BadRequest(new RegistrationResponse()
            {
                Errors = new List<string>()
                {
                    "Invalid payload"
                },
                Success = false
            });
        }

        private async Task<AuthResult> GenerateJwt(ApplicationUser user)
        {
            var jwtHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(_jwtConfig.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("Id", user.Id),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(30), //AddSeconds(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };

            var token = jwtHandler.CreateToken(tokenDescriptor);
            var jwt = jwtHandler.WriteToken(token);

            var refreshToken = new RefreshToken()
            {
                JwtId = token.Id,
                IsUsed = false,
                IsRevoked = false,
                UserId = user.Id,
                AddedDate = DateTime.UtcNow,
                ExpiryDate = DateTime.UtcNow.AddMonths(6),
                Token = RandomString(35) + Guid.NewGuid()
            };

            await _context.RefreshTokens.AddAsync(refreshToken);
            await _context.SaveChangesAsync();

            return new AuthResult()
            {
                Token = jwt,
                UserId = user.Id,
                Success = true,
                RefreshToken = refreshToken.Token
            };
        }

        private async Task<AuthResult> VerifyAndGenerateToken(TokenRequest tokenRequest)
        {
            var jwtHandler = new JwtSecurityTokenHandler();

            try
            {
                // Validation 1 (token format)
                SecurityToken validatedToken;
                Console.WriteLine("about to validate token");
                var tokenInVerification = jwtHandler.ValidateToken(tokenRequest.Token, _tokenValidationParams, out validatedToken);
                Console.WriteLine("completed validation with no issues");
                // Validation 2 (encryption)
                if(validatedToken is JwtSecurityToken jwtSecurityToken)
                {
                    var result = jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase);
                
                    if (result == false)
                    {
                        Console.WriteLine("about to return null which will result in invalid tokens message");
                        return null;
                    }
                }

                // Validation 3 (expiration date)
                var utcExpiryDate = long.Parse(tokenInVerification.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value);

                var expiryDate = UnixTimeStampToDateTime(utcExpiryDate);

                if (expiryDate > DateTime.UtcNow)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>()
                        {
                            "Token has not yet expired"
                        }
                    };
                }

                // Validation 4 (token existence)
                var storedToken = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.Token == tokenRequest.RefreshToken);
            
                if (storedToken == null)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>()
                        {
                            "Token does not exist"
                        }
                    };
                }

                // Validation 5 (token in use)
                if (storedToken.IsUsed)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>()
                        {
                            "This token has been used"
                        }
                    };
                }

                // Validation 6 (token revocation)
                if (storedToken.IsRevoked)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>()
                        {
                            "Token is revoked"
                        }
                    };
                }

                // Validation 7 (id)
                var jti = tokenInVerification.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti).Value;
                
                if (storedToken.JwtId != jti)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>()
                        {
                            "Token does not match"
                        }
                    };
                }

                // Update current token
                storedToken.IsUsed = true;
                _context.RefreshTokens.Update(storedToken);
                await _context.SaveChangesAsync();

                var dbUser = await _userManager.FindByIdAsync(storedToken.UserId);
                return await GenerateJwt(dbUser);
            }
            catch(Exception ex)
            {
                Console.WriteLine("we got caught " + ex.Message);
                return null;
            }
        }

        private DateTime UnixTimeStampToDateTime(long unixTimeStamp)
        {
            var dateTimeVal = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            dateTimeVal = dateTimeVal.AddSeconds(unixTimeStamp).ToLocalTime();
            return dateTimeVal;
        }

        private string RandomString(int length)
        {
            var random = new Random();
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(x => x[random.Next(x.Length)]).ToArray());
        }
    }
}
