namespace api.Common.IoC.Castle
{
    using System;
    using global::Castle.MicroKernel.Registration;
    using global::Castle.Windsor;

    public class CastleContainer : IContainer
    {
        private IWindsorContainer container;
        public CastleContainer()
        {
            this.container = new WindsorContainer();
        }
        public void Register<IInstance, Instance>()
            where Instance : IInstance 
            where IInstance : class
        {
            this.container.Register(Component.For<IInstance>().ImplementedBy<Instance>());
        }

        public IInstance Resolve<IInstance>()
        {
            return this.container.Resolve<IInstance>();
        }
    }
}
