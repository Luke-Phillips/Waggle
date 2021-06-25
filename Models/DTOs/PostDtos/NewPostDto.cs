using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models.DTOs
{
    public class NewPostDto
    {
        public int ClassroomId { get; set; }
        public int? ReplyToPostId { get; set; }
        public string PostType { get; set; }
        public string AuthorId { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public string File { get; set; }
    }
}
