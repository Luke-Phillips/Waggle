using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Waggle.Models;

namespace Waggle.Data
{
    public class WaggleContext : IdentityDbContext
    {
        public WaggleContext (DbContextOptions<WaggleContext> options)
            : base(options)
        {
        }

        public DbSet<Waggler> Wagglers { get; set; }
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<Classroom> Classrooms { get; set; }
        public DbSet<ClassroomWaggler> ClassroomWagglers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ClassroomWaggler>()
                .HasKey(cu => new { cu.ClassroomID, cu.WagglerID });
        }
    }
}
