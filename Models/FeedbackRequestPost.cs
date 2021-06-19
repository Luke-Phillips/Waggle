using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class FeedbackRequestPost : Post
    {
        public byte[] File { get; set; }
        public ICollection<Rating> Ratings { get; set; }
    }
}
