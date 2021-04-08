using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Post
    {
        // Key Properties
        public int PostID { get; set; }
        /*UserID: int[FK]    // not sure what we want post to reference yet
        ClassroomId[FK]
        ModuleId: int[FK]*/

        // Regular Properties
        public DateTime Time { get; set; }
        public string Content { get; set; }

        // Navigation Properties
        public ICollection<Post> Posts { get; set; } // rename this 'replies' if convention allows
        // public User User { get; set; } // owner of post
    }
}
