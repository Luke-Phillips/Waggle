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

        public DbSet<User> Users { get; set; }
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<Classroom> Classrooms { get; set; }
        public DbSet<ClassroomUser> ClassroomUsers { get; set; }
       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClassroomUser>()
                .HasKey(cu => new { cu.ClassroomID, cu.UserID });
        }
    }
}
