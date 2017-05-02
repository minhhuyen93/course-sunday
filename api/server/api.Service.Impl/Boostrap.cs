namespace api.Service.Impl
{
    using Common.IoC;
    using Common;

    public class Boostrap : IBootstrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}