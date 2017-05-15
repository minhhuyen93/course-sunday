using api.Common;
using api.Common.IoC;

namespace api.Repository.Impl
{
    public class Boostrap: IBootstrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}