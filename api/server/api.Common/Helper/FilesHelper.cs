namespace api.Common.Helper
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

    public class FilesHelper
    {
        public static IList<string> GetFilesName(string prefix)
        {
            string binPath = AppDomain.CurrentDomain.RelativeSearchPath;
            IList<string> filesName = Directory.GetFiles(binPath)
                .Where(name => Path.GetFileName(name).Contains(prefix))
                .Select(item => Path.GetFileNameWithoutExtension(item))
                .Distinct()
                .ToList();
            return filesName;
        }
    }
}
