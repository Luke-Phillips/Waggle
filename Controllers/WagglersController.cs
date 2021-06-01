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

namespace Waggle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class WagglersController : ControllerBase
    {
        private readonly WaggleContext _context;

        public WagglersController(WaggleContext context)
        {
            _context = context;
        }

        // For Debugging Porpoises *mmmrrwwaahhh*
        // GET: api/Wagglers
        [HttpGet()]
        public async Task<ActionResult<List<Waggler>>> GetWagglers(int id)
        {
            var waggler = await _context.Wagglers
                .AsNoTracking()
                .Include(u => u.Achievements)
                .Include(u => u.ClassroomWagglers)
                    .ThenInclude(cu => cu.Classroom)
                .ToListAsync();
            return waggler;
        }

        // GET: api/Wagglers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WagglerDto>> GetWaggler(int id)
        {
            var user = await _context.Wagglers.Where(u => u.WagglerID == id) // replace later with sesh cookies or the like                                    
                .Include(u => u.Achievements)                          
                .Include(u => u.ClassroomWagglers)
                    .ThenInclude(cu => cu.Classroom)
                .Select(u => new WagglerDto
                {
                    Email = u.Email,
                    Name = u.Name,
                    Points = u.Points,
                    Achievements = u.Achievements,
                    ClassroomWagglers = u.ClassroomWagglers,
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
