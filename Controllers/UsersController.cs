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

        // For Debugging Porpoises *mmmrrwwaahhh*
        // GET: api/Users
        [HttpGet()]
        public async Task<ActionResult<List<User>>> GetUsers(int id)
        {
            Console.WriteLine("----------------------test------------------------");
            var user = await _context.Users
                .AsNoTracking()
                .Include(u => u.Achievements)
                .Include(u => u.ClassroomUsers)
                    .ThenInclude(cu => cu.Classroom)
                .ToListAsync();
            return user;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetUser(int id)
        {
            var user = await _context.Users.Where(u => u.UserID == id) // replace later with sesh cookies or the like                                    
                .Include(u => u.Achievements)                          
                .Include(u => u.ClassroomUsers)
                    .ThenInclude(cu => cu.Classroom)
                .Select(u => new UserDto
                {
                    Email = u.Email,
                    Name = u.Name,
                    Achievements = u.Achievements,
                    ClassroomUsers = u.ClassroomUsers,
                })
                .SingleOrDefaultAsync();               

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

                // GET: api/Users
                [HttpGet]
                public async Task<ActionResult<IEnumerable<User>>> GetUser()
                {
                    return await _context.Users.ToListAsync();
                }*/



        /*      // PUT: api/Users/5
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
