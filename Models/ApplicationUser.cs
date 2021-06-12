using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int Points { get; set; }
        // Navigation Properties
        public ICollection<AppUserClassroom> AppUserClassrooms { get; set; }
        public ICollection<Achievement> Achievements { get; set; }
        //public ICollection<Badge> Badges { get; set; }             
    }
}
