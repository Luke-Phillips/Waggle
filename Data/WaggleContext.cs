using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Waggle.Models;

namespace Waggle.Data
{
    public class WaggleContext : DbContext
    {
        public WaggleContext (DbContextOptions<WaggleContext> options)
            : base(options)
        {
        }

        public DbSet<Waggle.Models.User> User { get; set; }
    }
}
