using System;
using System.Collections.Generic;

namespace Waggle.Models.DTOs.UserDtos
{
    public class ClassroomUsersDto
    {
        public string UserId { get; set; }
        public bool IsModerator { get; set; }
        public EnrollmentStatus EnrollmentStatus { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string ProfilePicture { get; set; }
    }
}
