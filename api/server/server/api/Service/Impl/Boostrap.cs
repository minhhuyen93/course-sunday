namespace api.Service.Impl
{
    using Common.IoC;

    public class Boostrap
    {
        public static void RegiterIoC()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}