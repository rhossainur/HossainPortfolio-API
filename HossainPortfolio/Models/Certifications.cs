namespace HossainPortfolio.Models
{
    public class Certifications
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime ReceiveDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string UrlLink { get; set; }
        public bool IsNeverExpire { get; set; }

    }
}
