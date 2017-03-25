namespace api.Repository
{
    using System.Collections.Generic;
    using api.Context;

    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category Create(Category category);
        Category GetCategoryByName(string name);
    }
}
