using HossainPortfolio.DataAccess;
using HossainPortfolio.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HossainPortfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CertificationController : Controller
    {
        private readonly HossainPortfolioDbContext hossainPortfolioDbContext;

        public CertificationController(HossainPortfolioDbContext hossainPortfolioDbContext)
        {
            this.hossainPortfolioDbContext = hossainPortfolioDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCertifications()
        {
            var certification=await this.hossainPortfolioDbContext.Certifications.ToListAsync();
            return Ok(certification);
        }
        [HttpPost]
        public async Task<IActionResult> AddCertificate([FromBody] Certifications certifications)
        {
            certifications.Id = Guid.NewGuid();
            await this.hossainPortfolioDbContext.Certifications.AddAsync(certifications);
            await this.hossainPortfolioDbContext.SaveChangesAsync();
            return Ok(certifications);
        }
    }
}
