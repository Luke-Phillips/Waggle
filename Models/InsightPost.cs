using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Waggle.Models
{
    public class InsightPost : Post
    {
        public ICollection<ApplicationUser> ButtonPressers { get; set; }
    }
}
