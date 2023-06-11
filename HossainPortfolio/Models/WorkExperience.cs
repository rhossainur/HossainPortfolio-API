namespace HossainPortfolio.Models
{
    public class WorkExperience
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string CompanyName { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public bool IsCurrent { get; set; }

    }
}
