using api.Common.Helper;
using api.Common.IoC;

namespace api.Common.App
{
    public class Application : IApplication
    {
        public void Start()
        {
            AssemblyHelper.Execute<IOnApplicationStarted>();
            AssemblyHelper.Execute<IBootstrap>();
        }
    }
}
