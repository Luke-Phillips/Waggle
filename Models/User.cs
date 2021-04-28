using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class User
    {
        // Key Properties
        public int UserID { get; set; }

        // Regular Properties
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }

        // Navigation Properties
        public ICollection<ClassroomUser> ClassroomUsers { get; set; }
        //public ICollection<Achievement> Achievements { get; set; } // commented out for testing
        //public ICollection<Badge> Badges { get; set; }             // commented out for testing
    }

    // UserDto allows us to return a user without the password field. Should we consider projection instead?
    public class UserDto 
    {
        // Key Properties
        public int UserID { get; set; }

        // Regular Properties
        public string Email { get; set; }
        public string Name { get; set; }

        // Navigation Properties
        public ICollection<ClassroomUser> ClassroomUsers { get; set; }
    }
}
