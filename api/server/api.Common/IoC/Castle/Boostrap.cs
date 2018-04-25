namespace api.Common.IoC.Castle
{
    public class Boostrap : IOnApplicationStarted
    {
        public void Execute()
        {
            IoCContainer.SetContainer(new CastleContainer());
        }
    }
}
