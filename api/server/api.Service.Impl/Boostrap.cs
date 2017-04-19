namespace api.Service.Impl
{
    using api.Common.IoC;
    public class Boostrap
    {
        public static void RegisterIoC()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}
