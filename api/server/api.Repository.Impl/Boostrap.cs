namespace api.Repository.Impl
{
    using api.Common.IoC;
    public class Boostrap
    {
        public static void RegisterIoC()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}
