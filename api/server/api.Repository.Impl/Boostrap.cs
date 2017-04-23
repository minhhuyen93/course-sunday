
using api.Common;

namespace api.Repository.Impl
{
    public class Boostrap
    {
        public static void RegisterIoC()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}