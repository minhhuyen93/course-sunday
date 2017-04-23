namespace api.Common.Helper
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using IoC;

    public class AssemblyHelper
    {
        public static void Execute<IInterface>() where IInterface : ITask
        {
            IList<string> dlls = FileHelper.GetFilesName(AppConts.PROJECT_NAMESPACE_PREFIX);
            IEnumerable<Type> types = new List<Type>();
            foreach (string dll in dlls)
            {
                IEnumerable<Type> typeDlls = Assembly.Load(dll).GetTypes().Where(
                    type => type.IsClass && !type.IsAbstract && typeof(IInterface).IsAssignableFrom(type));
                types = types.Concat(typeDlls);
            }
            foreach (Type type in types)
            {
                ITask instance = Activator.CreateInstance(type) as ITask;
                instance.Execute();
            }
        }
    }
}