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
    [Route("[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly WaggleContext _context;

        private List<string> postTypes = new List<string> {
            "insight",
            "question",
            "answer",
            "feedbackRequest",
            "feedback",
            "announcement",
            "comment"
        };

        private List<string> repliablePostTypes = new List<string> {
            "insight",
            "question",
            "feedbackRequest",
            "announcement",
            "comment"
        };


    public PostsController(WaggleContext context)
        {
            _context = context;
        }

        // POST: api/Posts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Post>> CreatePost(NewPostDto newPost)
        {
            if (await _context.Classrooms.AsNoTracking().FirstOrDefaultAsync(c => c.ClassroomId == newPost.ClassroomId) is null)
            {
                return BadRequest("Classroom does not exist");
            }
            if (newPost.ReplyToPostId is not null &&
                await _context.Posts.AsNoTracking().FirstOrDefaultAsync(p => p.PostId == newPost.ReplyToPostId) is null)
            {
                return BadRequest("Post being replied to does not exist");
            }
            if (await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == newPost.AuthorId) is null)
            {
                return BadRequest("User does not exist");
            }
            if (!postTypes.Contains<string>(newPost.PostType)) return BadRequest("invalid post type");

            byte[] file;
            if (newPost.File is null) file = null;
            else
            {
                try
                {
                    file = Convert.FromBase64String(newPost.File); //undo: BitConverter.ToString(newBytes))
                }
                catch (FormatException)
                {
                    return BadRequest("file should be a base-64 encoding");
                }
            }

            await _context.Posts.AddAsync(new Post
            {
                ClassroomId = newPost.ClassroomId,
                ReplyToPostId = newPost.ReplyToPostId,
                PostType = newPost.PostType,
                AuthorId = newPost.AuthorId,
                Time = newPost.Time,         // check this
                Content = newPost.Content,
                IsRepliable = newPost.ReplyToPostId is null &&
                    repliablePostTypes.Contains(newPost.PostType),        
                File = file
            });
            await _context.SaveChangesAsync();

            var result = new JsonResult(new { });
            result.StatusCode = 201;
            return result;
        }

        // GET: api/Posts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            return await _context.Posts.ToListAsync();
        }

        // GET: api/Posts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        // PUT: api/Posts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPost(int id, Post post)
        {
            if (id != post.PostId)
            {
                return BadRequest();
            }

            _context.Entry(post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
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

        // DELETE: api/Posts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostExists(int id)
        {
            return _context.Posts.Any(e => e.PostId == id);
        }
    }
}
