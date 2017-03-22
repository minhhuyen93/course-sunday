
namespace server.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using api.Context;
    using api.Service;
    using api.Service.Impl;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IList<Category> GetCategories() {
            ICategoryService categoryService = new CategoryService();
            return categoryService.GetCategories();
        }

        [Route("")]
        [HttpPost]
        public Category CreateCategory(Category category) {
            ICategoryService service = new CategoryService();
            return service.CreateCategory(category);
        }
    }
}
