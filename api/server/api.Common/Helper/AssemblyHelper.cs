using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using api.Common.IoC;

namespace api.Common.Helper
{
    public class AssemblyHelper
    {
        public static void Execute<IInterface>() where IInterface : ITask
        {
            IList<string> dlls = FilesHelper.GetFilesName(Appconst.PROJECT_NAME_SPACE_PREFIX);
            IEnumerable<Type> types = new List<Type>();
            foreach (string dll in dlls)
            {
                IEnumerable<Type> dllsType = Assembly.Load(dll).GetTypes().Where(type => type.IsClass && !type.IsAbstract && typeof(IInterface).IsAssignableFrom(type));
                types = types.Concat(dllsType);
            }
            foreach (Type type in types)
            {
                ITask instace = Activator.CreateInstance(type) as ITask;
                instace.Execute();
            }
        }
    }
}
