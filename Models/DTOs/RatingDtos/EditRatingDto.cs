using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models.DTOs.RatingDtos
{
    public class EditRatingDto
    {
        public int RatingId { get; set; }
        public bool BinaryMetric { get; set; }
        public int? NumericMetric { get; set; }
    }
}
