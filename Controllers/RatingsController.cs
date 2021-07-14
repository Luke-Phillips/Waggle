using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Waggle.Data;
using Waggle.Models;
using Waggle.Models.DTOs.RatingDtos;

namespace Waggle.Controllers
{
    [Route("[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class RatingsController : ControllerBase
    {
        private readonly WaggleContext _context;

        public RatingsController(WaggleContext context)
        {
            _context = context;
        }

        // GET: api/Ratings
/*        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rating>>> GetRatings()
        {
            return await _context.Ratings.ToListAsync();
        }*/

        // GET: api/Ratings/5
        /*[HttpGet("{id}")]
        public async Task<ActionResult<Rating>> GetRating(int id)
        {
            var rating = await _context.Ratings.FindAsync(id);

            if (rating == null)
            {
                return NotFound();
            }

            return rating;
        }*/

        

        // POST: /ratings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rating>> CreateRating(Rating rating)
        {
            // TODO check if token id matches body user id
            
            if (!(await _context.Users.AnyAsync(u => u.Id == rating.ApplicationUserId)) ||
                !(await _context.Posts.AnyAsync(p => p.PostId == rating.PostId)))
            {
                return BadRequest("user or post id does not exist");
            }

            await _context.Ratings.AddAsync(rating);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // PUT: /ratings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> EditRating(EditRatingDto editedRating)
        {
            // TODO auth: check if token id matches body user id
            
            var rating = await _context.Ratings.FirstOrDefaultAsync(r => r.RatingId == editedRating.RatingId);
            if (rating is null)
            {
                return BadRequest("rating does not exist");
            }

            rating.BinaryMetric = editedRating.BinaryMetric;
            rating.NumericMetric = editedRating.NumericMetric;
           
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
