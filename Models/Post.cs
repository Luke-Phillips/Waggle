using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Waggle.Models
{
    public class Post
    {
        // Key Properties
        public int PostId { get; set; }
        public int? ReplyToPostId { get; set; }
        public string AuthorId { get; set; } // Author Id
        public int ClassroomId { get; set; }

        // Regular Properties
        public string PostType { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public bool IsRepliable { get; set; }
        public string File { get; set; }

        // Navigation Properties
        [ForeignKey("ReplyToPostId")]
        public Post ReplyToPost { get; set; }
        public ICollection<Post> ReplyPosts { get; set; }
        [ForeignKey("AuthorId")]
        public ApplicationUser Author { get; set; }
        public ICollection<Rating> Ratings { get; set; }
    }
}