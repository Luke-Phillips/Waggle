using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class ApplicationUserClassroom
    {
        // Key Properties
        [ForeignKey("ApplicationUser")]
        public string ApplicationUserId { get; set; }
        public int ClassroomId { get; set; }
        
        // Regular Properties
        public bool IsModerator { get; set; }
        public bool isEnrolled { get; set; } // if we use invite code, mod should have to accept
        public string DisplayName { get; set; }
        public string ProfilePicture { get; set; } //http://www.binaryintellect.net/articles/2f55345c-1fcb-4262-89f4-c4319f95c5bd.aspx

        // Navigation Properties
        public ApplicationUser ApplicationUser { get; set; }
        public Classroom Classroom { get; set; }
    }
}
