using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Waggle.Data;
using Waggle.Models;
using Waggle.Models.DTOs.ClassroomDtos;

namespace Waggle.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClassroomsController : ControllerBase
    {
        private readonly WaggleContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ClassroomsController(WaggleContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // POST: api/Classrooms
        [HttpPost("{userId}")]
        public async Task<JsonResult> CreateClassroom(ClassroomCreationDto classroomDto)
        {

            var inviteCode = Guid.NewGuid().ToString();
            var classroom = new Classroom
            {
                Owner = await _userManager.FindByIdAsync(classroomDto.OwnerId),
                Name = classroomDto.Name,
                Image = Encoding.ASCII.GetBytes(classroomDto.Image),
                InviteCode = inviteCode
            };
            await _context.Classrooms.AddAsync(classroom);
            await _context.SaveChangesAsync();

            var response = new JsonResult(new { Id = classroom.ClassroomId });
            response.StatusCode = 201;
            return response;
        }

        [HttpGet("{userID}")]
        public async Task<ActionResult<List<ClassroomRetrievalDto>>> GetApplicationUserClassrooms(string userID)
        {
            List<ApplicationUserClassroom> applicationUserClassrooms = await _context.ApplicationUserClassrooms
                .Where(cu => cu.ApplicationUserId == userID)
                .Include(cu => cu.Classroom)
                .ToListAsync();

            var classrooms = new List<ClassroomRetrievalDto>();
            foreach (ApplicationUserClassroom appUserClass in applicationUserClassrooms)
            {
                classrooms.Add(new ClassroomRetrievalDto
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

        

        // GET: api/Classrooms/5
        /*[HttpGet("{id}")]
        public async Task<ActionResult<Classroom>> GetClassroom(int id)
        {
            var classroom = await _context.Classrooms.FindAsync(id);

            if (classroom == null)
            {
                return NotFound();
            }

            return classroom;
        }

        // PUT: api/Classrooms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClassroom(int id, Classroom classroom)
        {
            if (id != classroom.ClassroomId)
            {
                return BadRequest();
            }

            _context.Entry(classroom).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassroomExists(id))
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

        // POST: api/Classrooms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Classroom>> PostClassroom(Classroom classroom)
        {
            _context.Classrooms.Add(classroom);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClassroom", new { id = classroom.ClassroomId }, classroom);
        }

        // DELETE: api/Classrooms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClassroom(int id)
        {
            var classroom = await _context.Classrooms.FindAsync(id);
            if (classroom == null)
            {
                return NotFound();
            }

            _context.Classrooms.Remove(classroom);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClassroomExists(int id)
        {
            return _context.Classrooms.Any(e => e.ClassroomId == id);
        }*/
    }
}
