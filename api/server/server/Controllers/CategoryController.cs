
namespace server.Controllers
{
    using System.Collections.Generic;
    using System.Net.Http;
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
        [ResponseWrapper]
        public IList<Category> GetCategories()
        {
            ICategoryService categoryService = new CategoryService();
            return categoryService.GetCategories();
        }

        [Route("")]
        [HttpPost]
        public IResponseData<string> CreateCategory(Category category)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                ICategoryService service = new CategoryService();
                service.CreateCategory(category);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }

        [Route("login")]
        [HttpPost]
        [ResponseWrapper]
        public LogInResponse LogIn(LogInRequest request)
        {
            ICategoryService service = new CategoryService();
            LogInResponse loginResponse = service.LogIn(request);
            return loginResponse;
        }
    }
}
