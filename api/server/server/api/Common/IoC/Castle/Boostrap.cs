
namespace api.Common.IoC.Castle
{
using System;
    public class Boostrap
    {
        public static void Init()
        {
            IoCContainer.SetContainer(new CastleContainer());
        }
    }
}