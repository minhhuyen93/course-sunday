namespace api.Repository.Impl
{
    using api.Common;
    using api.Common.IoC;
    public class Boostrap : IBoostrap
    {
        public void RegisterIoC()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}