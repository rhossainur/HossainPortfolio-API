using HossainPortfolio.DataAccess;
using HossainPortfolio.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HossainPortfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        private readonly HossainPortfolioDbContext hossainPortfolioDbContext;

        public ProjectController(HossainPortfolioDbContext hossainPortfolioDbContext)
        {
            this.hossainPortfolioDbContext = hossainPortfolioDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProjects() 
        {
            var project=await this.hossainPortfolioDbContext.Projects.ToListAsync();
            return Ok(project);
        }

        [HttpPost]
        public async Task<IActionResult> AddProject([FromBody] Project project)
        {
            project.Id = Guid.NewGuid();
            await this.hossainPortfolioDbContext.Projects.AddAsync(project);
            await this.hossainPortfolioDbContext.SaveChangesAsync();
            return Ok(project);
        }
    }
}
