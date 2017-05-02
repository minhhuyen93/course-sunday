using System;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using api.Common.App;
using Newtonsoft.Json.Serialization;

namespace server
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        IApplication app;
        public WebApiApplication()
        {
            this.app = new api.Common.App.Application();
            this.Error += OnError;
        }

        private void OnError(object sender, EventArgs e)
        {
            this.app.OnError();
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            
            this.app.Start();
        }
    }
}
