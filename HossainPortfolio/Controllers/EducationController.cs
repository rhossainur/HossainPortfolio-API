using HossainPortfolio.DataAccess;
using HossainPortfolio.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HossainPortfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EducationController : Controller
    {
        private readonly HossainPortfolioDbContext hossainPortfolioDbContext;

        public EducationController(HossainPortfolioDbContext hossainPortfolioDbContext)
        {
            this.hossainPortfolioDbContext = hossainPortfolioDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEducations()
        {
            var education=await this.hossainPortfolioDbContext.Educations.ToListAsync();
            return Ok(education);
        }

        [HttpPost]
        public async Task<IActionResult> AddEducation([FromBody] Education education)
        {
            education.Id = Guid.NewGuid();
            await this.hossainPortfolioDbContext.Educations.AddAsync(education);
            await this.hossainPortfolioDbContext.SaveChangesAsync();
            return Ok(education);
        }
    }
}
