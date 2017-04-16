namespace api.Common.IoC
{
    public interface IContainer
    {
        IInstance Resolve<IInstance>();
        void Register<IInstance, Instance>()
            where Instance : IInstance
            where IInstance : class;
    }
}
