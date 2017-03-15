
namespace server.Service
{
    using System;
    using System.Collections.Generic;
    using server.Models;
    using Repository;

    public class CategoryService : ICategoryService
    {
        public Category CreateCategory(Category category)
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.Create(category);
        }

        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }
    }
}