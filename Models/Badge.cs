using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Badge
    {
        // Key Properties
        public int BadgeID { get; set; }

        // Regular Properties
        public string Name { get; set; }
        public string Description { get; set; }
        public int Points { get; set; }

        // Navigation Properties
        public ICollection<Achievement> Achievements { get; set; }
    }
}
