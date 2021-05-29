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

namespace Waggle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthManagementController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly JwtConfig _jwtConfig;

        public AuthManagementController(
            UserManager<IdentityUser> userManager,
            IOptionsMonitor<JwtConfig> optionsMonitor)
        {
            _userManager = userManager;
            _jwtConfig = optionsMonitor.CurrentValue;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationDto user)
        {
            Console.WriteLine("-----------------We got past middleware------------------");
            if (ModelState.IsValid)
            {
                Console.WriteLine("-----------------Model is valid------------------");
                var existingUser = await _userManager.FindByEmailAsync(user.Email);

                if (existingUser != null)
                {
                    return BadRequest(new RegistrationResponse() {
                        Errors = new List<string>() {
                            "Email already in use"
                        },
                        Success = false
                    });
                }

                var newUser = new IdentityUser() { Email = user.Email, UserName = user.Username };
                var isCreated = await _userManager.CreateAsync(newUser, user.Password);
                if (isCreated.Succeeded)
                {
                    var jwt = GenerateJwt(newUser);

                    return Ok(new RegistrationResponse(){
                        Success = true,
                        Token = jwt,
                    });
                }
                else
                {
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

        private string GenerateJwt(IdentityUser user)
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
                Expires = DateTime.UtcNow.AddHours(6),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };

            var token = jwtHandler.CreateToken(tokenDescriptor);
            var jwt = jwtHandler.WriteToken(token);

            return jwt;
        }
    }
}
