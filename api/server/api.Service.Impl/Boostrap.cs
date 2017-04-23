namespace api.Service.Impl
{
    using Common.IoC;
    using Common;

    public class Boostrap : IBoostrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}