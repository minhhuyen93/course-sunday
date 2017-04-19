namespace api.Common.IoC
{
    public interface IContainer
    {
        IInstance Resolve<IInstance>();
        void Register<IInstance, Instance>()
            where IInstance : class
            where Instance : IInstance;
    }
}
