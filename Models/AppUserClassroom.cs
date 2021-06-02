using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class AppUserClassroom
    {
        // Key Properties
        [ForeignKey("ApplicationUser")]
        public string ApplicationUserId { get; set; }
        public int ClassroomId { get; set; }
        
        // Regular Properties
        public string Role { get; set; }
        public string DisplayName { get; set; }
        // public x ProfilePicture { get; set; }

        // Navigation Properties
        public ApplicationUser ApplicationUser { get; set; }
        public Classroom Classroom { get; set; }
    }
}
