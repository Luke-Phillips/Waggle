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

namespace Waggle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly WaggleContext _context;

        public UsersController(WaggleContext context)
        {
            _context = context;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate()
        {
            return Ok();
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
         public async Task<ActionResult<List<UserDto>>> GetUser(int id)
         {
            var user = await _context.Users.Where(u => u.UserID == id) // obviously this where will change. passwords and sessions instead
                .Include(u => u.ClassroomUsers)
                .ThenInclude(cu => cu.Classroom)
                .Select(u =>
                new UserDto()
                {
                    UserID = u.UserID,
                    Email = u.Email,
                    Name = u.Name,                  
                    ClassroomUsers = u.ClassroomUsers,
                })
                
                .ToListAsync();

            if (user == null)
             {
                 return NotFound();
             }

             return user;
         }

        /*// PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserID)
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
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserID }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserID == id);
        }*/
    }
}
