namespace server.Service
{
    using System.Collections.Generic;
    using server.Models;
    public interface ICategoryService
    {
        IList<Category> GetCategories();
    }
}
