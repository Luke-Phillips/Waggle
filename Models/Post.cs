using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Waggle.Models
{
    public class Post
    {
        // Key Properties
        public int PostID { get; set; }
        public int ClassroomId { get; set; }

        // Regular Properties
        public string AuthorName { get; set; }
        [DataType(DataType.Date)] // this may be irrelevant data annotations
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public bool isRepliable { get; set; }

        // Navigation Properties
        public ICollection<Post> ReplyPosts { get; set; }
    }
}