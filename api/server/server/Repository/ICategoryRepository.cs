namespace server.Repository
{
    using System.Collections.Generic;
    using server.Models;

    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category Create(Category category);
    }
}
