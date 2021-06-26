using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Waggle.Data;
using Waggle.Models;
using Waggle.Models.DTOs.PostDtos;

namespace Waggle.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly WaggleContext _context;
        private readonly ILogger<PostsController> _logger;

        private readonly List<string> postTypes = new()
        {
            "insight",
            "question",
            "answer",
            "feedbackRequest",
            "feedback",
            "announcement",
            "comment"
        };

        private readonly List<string> repliablePostTypes = new() {
            "insight",
            "question",
            "feedbackRequest",
            "announcement",
            "comment"
        };


        public PostsController(WaggleContext context, ILogger<PostsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // POST: api/Posts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> CreatePost(NewPostDto newPost)
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

            await _context.Posts.AddAsync(new Post
            {
                ClassroomId = newPost.ClassroomId,
                ReplyToPostId = newPost.ReplyToPostId,
                PostType = newPost.PostType,
                AuthorId = newPost.AuthorId,
                Time = newPost.Time,
                Content = newPost.Content,
                IsRepliable = IsRepliable(newPost),        
                File = newPost.File
            });
            await _context.SaveChangesAsync();

            var result = new JsonResult(null)
            {
                StatusCode = 201
            };
            return result;
        }

        // GET: api/Posts
        [HttpGet("{classId}")]
        public async Task<ActionResult<IEnumerable<Post>>> GetClassroomPosts(int classId)
        {
            var posts = await _context.Posts
                .Where(
                    p => p.ClassroomId == classId &&
                    p.ReplyToPostId == null)
                .Include(p => p.ReplyPosts)
                .ToListAsync();

            var postResponse = new List<IPostDto>();
            foreach (Post post in posts)
            {
                postResponse.Add(ToPostDto(post));
            }

            var response = new JsonResult(postResponse)
            {
                StatusCode = 201
            };
            return response;
        }

        /* [HttpDelete("{postId}")]
         public async Task<ActionResult> DeletePost(int postId)
         {

         }*/

        /* [HttpPut("{postId}")]
        public async Task<ActionResult> EditPost(int postId)
        {
            
        }*/

        private bool IsRepliable(NewPostDto post)
        {
            return
                post.ReplyToPostId is null &&
                repliablePostTypes.Contains(post.PostType);
        }

        private IPostDto ToPostDto(Post post)
        {
            if (post.ReplyToPostId is null)
            {
                var replyPosts = new List<IPostDto>();
                if (!post.ReplyPosts.Any() || post.ReplyPosts is null)
                {
                    replyPosts = null;
                }                  
                else
                {
                    foreach (Post replyPost in post.ReplyPosts)
                    {

                        replyPosts.Add(ToPostDto(replyPost));
                    }
                }

                return new DiscussionPostDto
                {
                    PostId = post.PostId,
                    PostType = post.PostType,
                    AuthorId = post.AuthorId,
                    Time = post.Time,
                    Content = post.Content,
                    IsRepliable = post.IsRepliable,
                    File = post.File,
                    ReplyPosts = replyPosts
                };
            }

            return new ReplyPostDto
            {
                PostId = post.PostId,
                PostType = post.PostType,
                AuthorId = post.AuthorId,
                Time = post.Time,
                Content = post.Content,
                IsRepliable = post.IsRepliable,
                File = post.File
            };
        }      
    }
}
