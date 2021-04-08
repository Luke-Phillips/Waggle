﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Classroom
    {
        public int ClassroomID { get; set; }
        public string Name { get; set; }
        // Image to represent classroom
        // public x Icon { get; set; }        
        public string InviteCode { get; set; }        
        // Classroom Owner (consider changing name and using foreign key annotation)
        public int UserID { get; set; }
        // Modules
        // public ICollection<Module> Modules
        public ICollection<UserClassroom> UserClassroom { get; set; }
        
        
    }
}
