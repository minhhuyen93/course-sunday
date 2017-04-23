namespace api.Common.IoC.Castle
{
    public class ConfigCastleTask : IOnApplicationStarted
    {
        public void Execute()
        {
            IoCContainer.SetContainer(new CastleContainer());
        }
    }
}