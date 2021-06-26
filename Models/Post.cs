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
        public int ClassroomId { get; set; }
        public int? ReplyToPostId { get; set; }

        // Regular Properties
        public string PostType { get; set; }
        public string AuthorId { get; set; }
        //[DataType(DataType.Date)]
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public bool IsRepliable { get; set; }
        public string File { get; set; }

        // Navigation Properties
        [ForeignKey("ReplyToPostId")]
        public Post ReplyToPost { get; set; }
        public ICollection<Post> ReplyPosts { get; set; }
        public ICollection<Rating> Ratings { get; set; }
    }
}