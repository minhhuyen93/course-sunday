﻿namespace api.Common.Attribute
{
    using System.Net;
    using System.Net.Http;
    using System.Web.Http.Filters;
    public class ResponseWrapper : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            IResponseData<IEntity> response = new ResponseData<IEntity>();
            if (actionExecutedContext.Exception == null) {
                var actionResponse = (ObjectContent)actionExecutedContext.Response.Content;
                response.SetData(actionResponse.Value as IEntity);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.OK, response);
            }
            if (actionExecutedContext.Exception != null && actionExecutedContext.Exception is ValidationException)
            {
                response.AddErrors(((ValidationException)actionExecutedContext.Exception).Errors);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.BadRequest, response);
            }
        }
    }
}