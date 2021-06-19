using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int RatingId { get; set; }
        public Rating Rating { get; set; }
        public ICollection<AppUserClassroom> AppUserClassrooms { get; set; }           
    }
}
