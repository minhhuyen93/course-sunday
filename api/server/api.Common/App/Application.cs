namespace api.Common.App
{
    using System;
    using api.Common.Helper;
    using api.Common.IoC;
    public class Application : IApplication
    {
        public void OnError()
        {
            AssemblyHelper.Execute<IOnApplicationError>();
        }

        public void Start()
        {
            AssemblyHelper.Execute<IOnApplicationStarted>();
            AssemblyHelper.Execute<IBoostrap>();
        }
    }
}
