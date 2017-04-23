using System;
using Castle.MicroKernel.Registration;
using Castle.Windsor;

namespace api.Common.IoC.Castle
{
    public class CastleContainer : IContainer
    {
        private IWindsorContainer container;
        public CastleContainer()
        {
            this.container = new WindsorContainer();
        }
        public void Register<IInstance, Instance>()
            where IInstance : class
            where Instance : IInstance
        {
            this.container.Register(Component.For<IInstance>()
                .ImplementedBy<Instance>());
        }

        public IInstance Resolve<IInstance>()
        {
            return this.container.Resolve<IInstance>();
        }
    }
}
