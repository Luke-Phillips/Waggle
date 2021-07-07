using System;
using System.Collections.Generic;

namespace Waggle.Models.DTOs.UserDtos
{
    public class UpdatedUserDto
    {
        public string UserName { get; set; }
        public bool? IsModerator { get; set; }
        public int? EnrollmentStatus { get; set; }
        public string DisplayName { get; set; }
        public string ProfilePicture { get; set; }
    }
}
