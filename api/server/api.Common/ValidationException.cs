namespace api.Common
{
    using System;
    using System.Collections.Generic;

    public class ValidationException:Exception
    {
        public IList<string> Errors { get; set; }
        public ValidationException()
        {
            this.Errors = new List<string>();
        }

        public void AddError(string errorMessage)
        {
            this.Errors.Add(errorMessage);
        }

        public void ThrowIfError()
        {
            if (this.Errors.Count <= 0) { return; }
            throw this;
        }
    }
}
