namespace api.Context
{
    using System.Data.Entity;
    using api.Context;

    public class DbContext: System.Data.Entity.DbContext
    {
        public DbContext(): base("Default1")
        {
        }
        public DbSet<Category> Categories { get; set; }
    }
}