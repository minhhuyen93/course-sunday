using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using api.Common;
using api.Common.Helper;
using api.Common.IoC;
using Newtonsoft.Json.Serialization;

namespace server
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            InitBoostrap();
        }

        private void InitBoostrap()
        {
            IList<string> dlls = FileHelper.GetFilesName(AppConts.PROJECT_NAMESPACE_PREFIX);
            IEnumerable<Type> bootstraps = new List<Type>();
            foreach (string dll in dlls)
            {
                IEnumerable<Type> bootstrapDll = Assembly.Load(dll).GetTypes().Where(
                    type => type.IsClass && !type.IsAbstract && typeof(IBoostrap).IsAssignableFrom(type));
                bootstraps = bootstraps.Concat(bootstrapDll);
            }
            foreach (Type type in bootstraps)
            {
                var boostrapsInstance = Activator.CreateInstance(type) as IBoostrap;
                boostrapsInstance.RegisterIoC();
            }
        }
    }
}
