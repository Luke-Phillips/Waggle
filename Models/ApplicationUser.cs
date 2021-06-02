using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class ApplicationUser : IdentityUser
    {
        // Key
        public string ApplicationUserId { get; set; }
        // Regular Properties
        public int Points { get; set; }

        // Navigation Properties
        public ICollection<AppUserClassroom> AppUserClassrooms { get; set; }
        public ICollection<Achievement> Achievements { get; set; }
        //public ICollection<Badge> Badges { get; set; }             
    }
}
