using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class ClassroomUser
    {
        // Key Properties
        public int UserID { get; set; }
        public int ClassroomID { get; set; }
        
        // Regular Properties
        public string Role { get; set; }
        public string DisplayName { get; set; }
        // public x ProfilePicture { get; set; }
        
        // Navigation Properties
        public User User { get; set; }
        public Classroom Classroom { get; set; }
    }
}
