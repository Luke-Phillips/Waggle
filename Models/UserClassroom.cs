using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class UserClassroom
    {
        // Key Properties
        public int UserClassroomID { get; set; }
        public int UserId { get; set; }
        public int ClassroomId { get; set; }
        
        // Regular Properties
        public string Role { get; set; } // consider enum?
        public string DisplayName { get; set; }
        // public x ProfilePicture { get; set; }
        
        // Navigation Properties
        public User User { get; set; }
        public Classroom Classroom { get; set; }
    }
}
