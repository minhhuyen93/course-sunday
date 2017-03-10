namespace server.Repository
{
    using System.Collections.Generic;
    using System.Linq;
    using Context;
    using server.Models;

    public class CategoryRepository : ICategoryRepository
    {
        private DbContext context;
        public CategoryRepository()
        {
            this.context = new DbContext();
        }
        public IList<Category> GetCategories()
        {
            return context.Categories.ToList();
        }
    }
}