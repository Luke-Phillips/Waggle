using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models.DTOs.ClassroomDtos
{
    public class ClassroomRetrievalDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public string InviteCode { get; set; }
        public bool IsModerator { get; set; }
        public bool isEnrolled { get; set; }
        public string DisplayName { get; set; }
    }
}
