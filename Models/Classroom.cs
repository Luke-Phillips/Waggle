using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Classroom
    {
        // Key Properties
        public int ClassroomID { get; set; }
        public int UserID { get; set; } // Classroom Owner (consider changing name and using foreign key annotation)

        // Regular Properties
        public string Name { get; set; }
        // Image to represent classroom
        // public x Icon { get; set; }        
        public string InviteCode { get; set; }

        // Navigation Properties
        public ICollection<UserClassroom> UserClassroom { get; set; }
        // public ICollection<Module> Modules



    }
}
