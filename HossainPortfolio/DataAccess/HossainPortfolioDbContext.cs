using HossainPortfolio.Models;
using Microsoft.EntityFrameworkCore;

namespace HossainPortfolio.DataAccess
{
    public class HossainPortfolioDbContext : DbContext
    {
        public HossainPortfolioDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<WorkExperience> WorkExperiences { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Certifications> Certifications { get; set; }
        public DbSet<Project> Projects { get; set; }

    }
}
