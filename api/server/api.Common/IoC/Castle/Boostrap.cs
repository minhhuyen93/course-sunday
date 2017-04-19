namespace api.Common.IoC.Castle
{
    public class Boostrap
    {
        public static void Init()
        {
            IoCContainer.SetContainer(new CastleContainer());
        }
    }
}
