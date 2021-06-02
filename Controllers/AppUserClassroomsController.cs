using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Waggle.Data;
using Waggle.Models;

namespace Waggle.Controllers
{
    [Route("api")]
    [ApiController]
    public class AppUserClassroomsController : ControllerBase
    {
        private readonly WaggleContext _context;

        public AppUserClassroomsController(WaggleContext context)
        {
            _context = context;
        }

        // GET: api/ClassroomWagglers/5
        [HttpGet("classroomusers/{classroomID}")]
        public async Task<ActionResult<List<AppUserClassroom>>> GetClassroomWagglers(int classroomID)
        {
            var classroomWaggler = await _context.AppUserClassrooms
                .Where(cu => cu.ClassroomId == classroomID)
                .ToListAsync();

            return classroomWaggler;
        }

        // GET: api/WagglerClassrooms/5
        [HttpGet("userclassrooms/{userID}")]
        public async Task<ActionResult<List<AppUserClassroom>>> GetAppUserClassrooms(string userID)
        {
            var classroomWaggler = await _context.AppUserClassrooms
                .Where(cu => cu.ApplicationUserId == userID)
                .Include(cu => cu.Classroom)
                .ToListAsync();

            return classroomWaggler;
        }

/*
        // PUT: api/ClassroomWagglers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{userID}/{classID}")]
        public async Task<IActionResult> PutClassroomWaggler(int id, ClassroomWaggler classroomWaggler)
        {
            if (id != classroomWaggler.ClassroomID)
            {
                return BadRequest();
            }

            _context.Entry(classroomWaggler).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassroomWagglerExists(id))
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

        // POST: api/ClassroomWagglers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClassroomWaggler>> PostClassroomWaggler(ClassroomWaggler classroomWaggler)
        {
            _context.ClassroomWagglers.Add(classroomWaggler);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ClassroomWagglerExists(classroomWaggler.ClassroomID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetClassroomWaggler", new { id = classroomWaggler.ClassroomID }, classroomWaggler);
        }

        // DELETE: api/ClassroomWagglers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClassroomWaggler(int id)
        {
            var classroomWaggler = await _context.ClassroomWagglers.FindAsync(id);
            if (classroomWaggler == null)
            {
                return NotFound();
            }

            _context.ClassroomWagglers.Remove(classroomWaggler);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClassroomWagglerExists(int id)
        {
            return _context.ClassroomWagglers.Any(e => e.ClassroomID == id);
        }
*/
    }
}
