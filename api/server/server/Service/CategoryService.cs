
namespace server.Service
{
    using System;
    using System.Collections.Generic;
    using server.Models;
    using Repository;

    public class CategoryService : ICategoryService
    {
        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }
    }
}