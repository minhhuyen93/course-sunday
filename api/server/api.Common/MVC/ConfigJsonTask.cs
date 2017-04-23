namespace api.Common.MVC
{
    using System.Web.Http;
    using IoC;
    using Newtonsoft.Json.Serialization;
    public class ConfigJsonTask : IOnApplicationStarted
    {
        public void Execute()
        {
            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
