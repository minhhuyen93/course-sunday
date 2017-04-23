namespace server.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using api.Common;
    using api.Common.Attribute;
    using api.Context;
    using api.Service;
    using api.Service.Impl;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("")]
        [HttpGet]
        //[ResponseWrapper]
        public IList<Category> GetCategories()
        {
            ICategoryService categoryService = IoCContainer.Resolve<ICategoryService>();
            return categoryService.GetCategories();
        }

        [Route("")]
        [HttpPost]
        [ResponseWrapper]
        public void CreateCategory(Category category)
        {
            ICategoryService categoryService = IoCContainer.Resolve<ICategoryService>();
            categoryService.CreateCategory(category);
        }

        [Route("login")]
        [HttpPost]
        [ResponseWrapper]
        public LogInResponse LogIn(LogInRequest request)
        {
            ICategoryService service = IoCContainer.Resolve<ICategoryService>();
            LogInResponse loginResponse = service.LogIn(request);
            return loginResponse;
        }
    }
}
