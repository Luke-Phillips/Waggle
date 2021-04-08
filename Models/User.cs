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
        public ICollection<UserClassroom> UserClassrooms { get; set; }
    }
}
