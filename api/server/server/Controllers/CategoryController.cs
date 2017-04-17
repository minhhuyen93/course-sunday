
namespace server.Controllers
{
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Web.Http;
    using api.Common;
    using api.Common.Attribute;
    using api.Common.IoC;
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
            ICategoryService service = IoCContainer.Resolve<ICategoryService>();
            return service.GetCategories();
        }

        //[Route("")]
        //[HttpPost]
        //public IResponseData<string> CreateCategory(Category category)
        //{
        //    IResponseData<string> response = new ResponseData<string>();
        //    try
        //    {
        //        ICategoryService service = new CategoryService();
        //        service.CreateCategory(category);
        //    }
        //    catch (ValidationException ex)
        //    {
        //        response.AddErrors(ex.Errors);
        //    }
        //    return response;
        //}

        [Route("login")]
        [HttpPost]
        [ResponseWrapper]
        public LogInResponse LogIn(LogInRequest request)
        {
            //ICategoryService service = new CategoryService();
            ICategoryService service = IoCContainer.Resolve<ICategoryService>();
            LogInResponse loginResponse = service.LogIn(request);
            return loginResponse;
        }
    }
}
