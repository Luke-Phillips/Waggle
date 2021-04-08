using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class Achievement
    {
        // Key Properties
        public int AchievementID { get; set; }

        // Regular Properties
        public string Name { get; set; }
        public string Description { get; set; }
        public int Points { get; set; }

        // Navigation Properties
        // possibly a collection of users who've achieved it
    }
}
