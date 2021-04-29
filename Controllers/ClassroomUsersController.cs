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
    public class ClassroomUsersController : ControllerBase
    {
        private readonly WaggleContext _context;

        public ClassroomUsersController(WaggleContext context)
        {
            _context = context;
        }

        // GET: api/ClassroomUsers/5
        [HttpGet("classroomusers/{classroomID}")]
        public async Task<ActionResult<List<ClassroomUser>>> GetClassroomUsers(int classroomID)
        {
            var classroomUser = await _context.ClassroomUsers
                .Where(cu => cu.ClassroomID == classroomID)
                .ToListAsync();

            return classroomUser;
        }

        // GET: api/UserClassrooms/5
        [HttpGet("userclassrooms/{userID}")]
        public async Task<ActionResult<List<ClassroomUser>>> GetUserClassrooms(int userID)
        {
            var classroomUser = await _context.ClassroomUsers
                .Where(cu => cu.UserID == userID)
                .Include(cu => cu.Classroom)
                .ToListAsync();

            return classroomUser;
        }

/*
        // PUT: api/ClassroomUsers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{userID}/{classID}")]
        public async Task<IActionResult> PutClassroomUser(int id, ClassroomUser classroomUser)
        {
            if (id != classroomUser.ClassroomID)
            {
                return BadRequest();
            }

            _context.Entry(classroomUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassroomUserExists(id))
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

        // POST: api/ClassroomUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClassroomUser>> PostClassroomUser(ClassroomUser classroomUser)
        {
            _context.ClassroomUsers.Add(classroomUser);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ClassroomUserExists(classroomUser.ClassroomID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetClassroomUser", new { id = classroomUser.ClassroomID }, classroomUser);
        }

        // DELETE: api/ClassroomUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClassroomUser(int id)
        {
            var classroomUser = await _context.ClassroomUsers.FindAsync(id);
            if (classroomUser == null)
            {
                return NotFound();
            }

            _context.ClassroomUsers.Remove(classroomUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClassroomUserExists(int id)
        {
            return _context.ClassroomUsers.Any(e => e.ClassroomID == id);
        }
*/
    }
}
