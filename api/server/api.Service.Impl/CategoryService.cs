namespace api.Service.Impl
{
    using System;
    using System.Collections.Generic;
    using api.Context;
    using api.Repository;
    using api.Repository.Impl;
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