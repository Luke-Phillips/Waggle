﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Waggler
    {
        // Key Properties
        public int WagglerID { get; set; }

        // Regular Properties
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int Points { get; set; }

        // Navigation Properties
        public ICollection<ClassroomWaggler> ClassroomWagglers { get; set; }
        public ICollection<Achievement> Achievements { get; set; }
        //public ICollection<Badge> Badges { get; set; }             
    }

    // WagglerDto allows us to return a user without the password field.
    // Consider looking into projection (interfaces alternative)
    public class WagglerDto 
    {
        // Key Properties
        public int WagglerID { get; set; }

        // Regular Properties
        public string Email { get; set; }
        public string Name { get; set; }
        public int Points { get; set; }

        // Navigation Properties
        public ICollection<ClassroomWaggler> ClassroomWagglers { get; set; }
        public ICollection<Achievement> Achievements { get; set; }
    }
}