using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models.DTOs.PostDtos
{
    public class MainPostDto : IPostDto
    {
        public int PostId { get; set; }
        public string AuthorName { get; set; }
        public string PostType { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public bool IsRepliable { get; set; }
        public int NumReplies { get; set; }
        public string File { get; set; }
        public ICollection<Rating> Ratings { get; set; }
    }
}
