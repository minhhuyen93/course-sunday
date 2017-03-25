namespace api.Repository.Impl
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using api.Context;

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

        public Category GetCategoryByName(string name)
        {
            return this.context.Categories.FirstOrDefault(item => item.Name == name);
        }
    }
}