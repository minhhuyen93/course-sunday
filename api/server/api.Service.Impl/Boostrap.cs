namespace api.Service.Impl
{
    using Common.IoC;
    using Common;

    public class Boostrap :IBoostrap
    {
        public void RegisterIoC()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}