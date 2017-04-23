namespace api.Common.IoC.Castle
{
    public class Boostrap:IBoostrap
    {
        public void RegisterIoC()
        {
            IoCContainer.SetContainer(new CastleContainer());
        }
    }
}