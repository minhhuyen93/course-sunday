namespace api.Repository.Impl
{
    using api.Common;
    using Common.IoC;

    public class Boostrap: IBootstrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}