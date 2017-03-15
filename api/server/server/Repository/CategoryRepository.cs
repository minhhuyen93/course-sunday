namespace server.Repository
{
    using System;
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

        public Category Create(Category category)
        {
            this.context.Categories.Add(category);
            this.context.SaveChanges();
            return category;
        }

        public IList<Category> GetCategories()
        {
            return context.Categories.ToList();
        }
    }
}