using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Module
    {
        // Key Properties
        public int ModuleID { get; set; }
        //public int ClassID { get; set; }

        // Regular Properties
        public string Name { get; set; }

        // Navigation Properties
        public ICollection<Post> Posts { get; set; }
    }
}
