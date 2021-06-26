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
        public string OwnerId { get; set; }

        // Regular Properties
        public string Name { get; set; }
        public string Icon { get; set; }        
        public string InviteCode { get; set; }

        // Navigation Properties
        [ForeignKey("OwnerId")]
        public ApplicationUser Owner { get; set; }
        public ICollection<ApplicationUserClassroom> ApplicationUserClassroom { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}
