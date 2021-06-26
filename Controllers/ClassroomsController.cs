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
        [HttpPost]
        public async Task<ActionResult> CreateAndJoinClassroom(ClassroomCreationDto classroomDto)
        {
            string ownerId = classroomDto.OwnerId;
            var owner = await _context.Users.FirstOrDefaultAsync(u => u.Id == ownerId);

            var classroom = new Classroom
            {
                OwnerId = ownerId,            
                Name = classroomDto.Name,
                Icon = classroomDto.Icon,
                InviteCode = Guid.NewGuid().ToString()
            };
            await _context.Classrooms.AddAsync(classroom);

            var appUserClassroom = new ApplicationUserClassroom
            {
                ApplicationUser = owner,
                Classroom = classroom,
                IsModerator = true,
                isEnrolled = true,
                DisplayName = owner.UserName
            };
            await _context.ApplicationUserClassrooms.AddAsync(appUserClassroom);

            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // POST: api/Classrooms
        [HttpPost("{userId}/{inviteCode}")]
        public async Task<ActionResult> JoinClassroom(string userId, string inviteCode)
        {
            var classId = (await _context.Classrooms.FirstOrDefaultAsync(c => c.InviteCode == inviteCode))?.ClassroomId;
            if (classId is null) return BadRequest("Invalid Invite Code");
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if (user is null) return BadRequest("User doesn't exist");

            var classroomUser = new ApplicationUserClassroom
            {
                ApplicationUserId = userId,
                ClassroomId = (int)classId,
                IsModerator = false,
                isEnrolled = false,
                DisplayName = user.UserName,
                ProfilePicture = null
            };
            await _context.ApplicationUserClassrooms.AddAsync(classroomUser);
            await _context.SaveChangesAsync();

            return Ok();
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
                    Icon = appUserClass.Classroom.Icon,
                    InviteCode = appUserClass.IsModerator ? appUserClass.Classroom.InviteCode : null,
                    IsModerator = appUserClass.IsModerator,
                    isEnrolled = appUserClass.isEnrolled,
                    DisplayName = appUserClass.DisplayName
                });
            }

            return classrooms;
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
                if (_context.Classrooms.Any(e => e.ClassroomId == id))
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
    }
}
