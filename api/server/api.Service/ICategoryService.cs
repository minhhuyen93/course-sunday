namespace api.Service
{
    using System.Collections.Generic;
    using api.Context;
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
        LogInResponse LogIn(LogInRequest request);
    }
}
