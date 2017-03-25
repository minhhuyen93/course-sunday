
namespace server.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using api.Common;
    using api.Context;
    using api.Service;
    using api.Service.Impl;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IResponseData<IList<Category>> GetCategories() {
            IResponseData<IList<Category>> response = new ResponseData<IList<Category>>();
            try
            {
            ICategoryService categoryService = new CategoryService();
            var categories = categoryService.GetCategories();
                response.SetData(categories);
            }
            catch (System.Exception)
            {
                response.AddError("category.getCategories.Invalid");
            }
            return response;
        }

        [Route("")]
        [HttpPost]
        public IResponseData<string> CreateCategory(Category category) {
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
        public IResponseData<LogInResponse> LogIn(LogInRequest request) {
            IResponseData<LogInResponse> response = new ResponseData<LogInResponse>();
            try
            {
                ICategoryService service = new CategoryService();
                LogInResponse loginResponse = service.LogIn(request);
                response.SetData(loginResponse);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        } 
    }
}
