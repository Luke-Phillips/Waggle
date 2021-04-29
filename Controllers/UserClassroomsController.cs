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
    [Route("api/[controller]")]
    [ApiController]
    public class UserClassroomsController : ControllerBase
    {
        private readonly WaggleContext _context;

        public UserClassroomsController(WaggleContext context)
        {
            _context = context;
        }

        // GET: api/UserClassrooms/5
        [HttpGet("{userID}")]
        public async Task<ActionResult<List<ClassroomUser>>> GetUserClassrooms(int userID)
        {
            var classroomUser = await _context.ClassroomUsers
                .Where(cu => cu.UserID == userID)
                .ToListAsync();

            return classroomUser;
        }
    }
}
