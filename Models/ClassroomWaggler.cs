using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class ClassroomWaggler
    {
        // Key Properties
        public int WagglerID { get; set; }
        public int ClassroomID { get; set; }
        
        // Regular Properties
        public string Role { get; set; }
        public string DisplayName { get; set; }
        // public x ProfilePicture { get; set; }

        // Navigation Properties
        public Waggler Waggler { get; set; }
        public Classroom Classroom { get; set; }
    }
}
