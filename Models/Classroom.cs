using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace Waggle.Models
{
    public class Classroom
    {
        // Key Properties
        public int ClassroomID { get; set; }
        //public int OwnerID { get; set; }

        // Regular Properties
        public string Name { get; set; }
        // Image to represent classroom
        // public x Icon { get; set; }        
        public string InviteCode { get; set; }

        // Navigation Properties
        public ICollection<ClassroomUser> ClassroomUsers { get; set; }
        //[ForeignKey("OwnerID")]
        //public User Owner { get; set; }
    }
}
