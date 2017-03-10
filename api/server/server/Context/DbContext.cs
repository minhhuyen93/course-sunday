namespace server.Context
{
    using System.Data.Entity;
    using server.Models;

    public class DbContext: System.Data.Entity.DbContext
    {
        public DbContext(): base("Default")
        {
        }
        public DbSet<Category> Categories { get; set; }
    }
}