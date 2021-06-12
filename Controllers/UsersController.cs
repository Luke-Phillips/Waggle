using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Waggle.Data;
using Waggle.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;

namespace Waggle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UsersController : ControllerBase
    {
        private readonly WaggleContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public UsersController(WaggleContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // For Debugging Porpoises *mmmrrwwaahhh*
        // GET: api/users
        [HttpGet()]
        public async Task<ActionResult<List<ApplicationUser>>> GetUsers()
        {
            var users = await _userManager.Users  
                .AsNoTracking()
                .Include(u => u.AppUserClassrooms)
                    .ThenInclude(uc => uc.Classroom)
                .ToListAsync();
            return users;
        }

        // GET: api/Wagglers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ApplicationUser>> GetUser(string id)
        {
            var user = await _userManager.Users//.FirstOrDefaultAsync(u => u.Id == id)                          
                .Include(u => u.AppUserClassrooms)
                    .ThenInclude(cu => cu.Classroom)
                .FirstOrDefaultAsync();

                /* .Select(u => new WagglerDto
                 {
                     Email = u.Email,
                     Name = u.Name,
                     Points = u.Points,
                     Achievements = u.Achievements,
                     ClassroomWagglers = u.ClassroomWagglers,
                 })
                 .SingleOrDefaultAsync();       */        

             if (user == null)
             {
                 return NotFound();
             }

             return user;
         }

        /*        [HttpPost("authenticate")]
                public IActionResult Authenticate()
                {
                    return Ok();
                }

                // GET: api/Wagglers
                [HttpGet]
                public async Task<ActionResult<IEnumerable<Waggler>>> GetWaggler()
                {
                    return await _context.Wagglers.ToListAsync();
                }*/



        /*      // PUT: api/Wagglers/5
                // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
                [HttpPut("{id}")]
                public async Task<IActionResult> PutWaggler(int id, Waggler user)
                {
                    if (id != user.WagglerID)
                    {
                        return BadRequest();
                    }

                    _context.Entry(user).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!WagglerExists(id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }

                    return NoContent();
                }

                // POST: api/Wagglers
                // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
                [HttpPost]
                public async Task<ActionResult<Waggler>> PostWaggler(Waggler user)
                {
                    _context.Wagglers.Add(user);
                    await _context.SaveChangesAsync();

                    return CreatedAtAction("GetWaggler", new { id = user.WagglerID }, user);
                }

                // DELETE: api/Wagglers/5
                [HttpDelete("{id}")]
                public async Task<IActionResult> DeleteWaggler(int id)
                {
                    var user = await _context.Wagglers.FindAsync(id);
                    if (user == null)
                    {
                        return NotFound();
                    }

                    _context.Wagglers.Remove(user);
                    await _context.SaveChangesAsync();

                    return NoContent();
                }

                private bool WagglerExists(int id)
                {
                    return _context.Wagglers.Any(e => e.WagglerID == id);
                }*/
    }
}
