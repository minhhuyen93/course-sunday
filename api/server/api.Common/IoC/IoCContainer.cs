using api.Common.IoC;
using Castle.MicroKernel.Registration;
using Castle.Windsor;

namespace api.Common
{
    public class IoCContainer
    {
        private static IContainer Container;
        public static void SetContainer(IContainer container) {
            IoCContainer.Container = container;
        }
        //private static IWindsorContainer Container;
        //static IoCContainer()
        //{
        //    IoCContainer.Container = new WindsorContainer();
        //}

        public static IInstance Resolve<IInstance>()
        {
            return IoCContainer.Container.Resolve<IInstance>();
        }

        public static void Register<IInstance, Instance>()
            where Instance : IInstance
            where IInstance : class
        {
            IoCContainer.Container.Register<IInstance, Instance>();
        }
    }
}