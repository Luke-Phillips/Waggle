using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<ApplicationUserClassroom> ApplicationUserClassrooms { get; set; }   
        public ICollection<Rating> Ratings { get; set; }
    }
}
