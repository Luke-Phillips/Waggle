using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Waggle.Data;
using Waggle.Models;
using Waggle.Models.DTOs;

namespace Waggle.Controllers
{
    [Route("api")]
    [ApiController]
    public class ApplicationUserClassroomsController : ControllerBase
    {
        private readonly WaggleContext _context;

        public ApplicationUserClassroomsController(WaggleContext context)
        {
            _context = context;
        }

        [HttpGet("userclassrooms/{userID}")]
        public async Task<ActionResult<List<ClassroomDto>>> GetApplicationUserClassrooms(string userID)
        {
            List<ApplicationUserClassroom> applicationUserClassrooms = await _context.ApplicationUserClassrooms
                .Where(cu => cu.ApplicationUserId == userID)
                .Include(cu => cu.Classroom)
                .ToListAsync();

            var classrooms = new List<ClassroomDto>();
            foreach(ApplicationUserClassroom appUserClass in applicationUserClassrooms)
            {
                classrooms.Add(new ClassroomDto
                {
                    Id = appUserClass.Classroom.ClassroomId,
                    Name = appUserClass.Classroom.Name,
                    Image = appUserClass.Classroom.Image,
                    InviteCode = appUserClass.IsModerator ? appUserClass.Classroom.InviteCode : null,
                    IsModerator = appUserClass.IsModerator,
                    isEnrolled = appUserClass.isEnrolled,
                    DisplayName = appUserClass.DisplayName
                });
            }

            return classrooms;
        }

        // GET: api/ClassroomWagglers/5
        /*[HttpGet("classroomusers/{classroomID}")]
        public async Task<ActionResult<List<ApplicationUserClassroom>>> GetClassroomWagglers(int classroomID)
        {
            var classroomWaggler = await _context.ApplicationUserClassrooms
                .Where(cu => cu.ClassroomId == classroomID)
                .ToListAsync();

            return classroomWaggler;
        }
*/
        // GET: api/WagglerClassrooms/5


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
