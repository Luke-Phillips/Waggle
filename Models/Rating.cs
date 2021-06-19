using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Rating
    {
        public int RatingId { get; set; }
        public int ApplicationUserId { get; set; }
        public int PostId { get; set; }
        public bool? BinaryMetric { get; set; }
        public int? NumericMetric { get; set; }
    }
}
