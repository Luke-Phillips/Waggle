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
        /*public int? ReplyPostID { get; set; } // include if reply post needs to know parent post
        /*UserID: int[FK]    // not sure what we want post to reference yet
        ClassroomId[FK]      // ditto
        ModuleId: int[FK]*/  // ditto

        // Regular Properties
        public string AuthorName { get; set; }
        [DataType(DataType.Date)] // this may be irrelevant data annotations
        public DateTime Time { get; set; }
        public string Content { get; set; }

        // Navigation Properties
        public ICollection<Post> ReplyPosts { get; set; }
        // public User User { get; set; } // owner of post
    }
}
