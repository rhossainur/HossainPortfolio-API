using HossainPortfolio.DataAccess;
using HossainPortfolio.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HossainPortfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkExperienceController : Controller
    {
        private readonly HossainPortfolioDbContext hossainPortfolioDbContext;

        public WorkExperienceController(HossainPortfolioDbContext hossainPortfolioDbContext)
        {
            this.hossainPortfolioDbContext = hossainPortfolioDbContext;
        }
        [HttpGet]
        public async  Task<IActionResult> GetAllWorkExperience()
        {
            var workExperience=await this.hossainPortfolioDbContext.WorkExperiences.ToListAsync();
            return Ok(workExperience);
        }

        [HttpPost]
        public async Task<IActionResult> AddWorkExperience([FromBody] WorkExperience workExperience)
        {
            workExperience.Id = Guid.NewGuid();
            await this.hossainPortfolioDbContext.WorkExperiences.AddAsync(workExperience);
            await this.hossainPortfolioDbContext.SaveChangesAsync();
            return Ok(workExperience);
        }
    }
}
