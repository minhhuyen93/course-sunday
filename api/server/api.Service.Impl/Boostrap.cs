
namespace api.Service.Impl
{
    using Common;

    public class Boostrap
    {
        public static void RegisterIoC()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}