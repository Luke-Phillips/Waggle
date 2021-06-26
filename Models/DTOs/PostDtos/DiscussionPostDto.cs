using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models.DTOs.PostDtos
{
    public class DiscussionPostDto : IPostDto
    {
        public string PostType { get; set; }
        public string AuthorId { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
        public bool IsRepliable { get; set; }
        public string File { get; set; }

        public ICollection<IPostDto> ReplyPosts { get; set; }
        //public ICollection<Rating> Ratings { get; set; }
    }
}
