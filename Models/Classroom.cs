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
        public int ClassroomId { get; set; }

        // Regular Properties
        public string Name { get; set; }
        // public bytes[] Image { get; set; }        
        public string InviteCode { get; set; }

        // Navigation Properties
        public ICollection<ApplicationUserClassroom> ApplicationUserClassroom { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}
