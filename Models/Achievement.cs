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
        public ICollection<User> Users { get; set; }
    }

    public class AchievementDto
    {
        // Key Properties
        public int AchievementID { get; set; }

        // Regular Properties
        public string Name { get; set; }
        public string Description { get; set; }
        public int Points { get; set; }
    }
}
