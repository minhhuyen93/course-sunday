namespace api.Common
{
    using System;
    using System.Collections.Generic;

    public class ResponseData<TData> : IResponseData<TData>
    {
        public TData Data { get; set; }
        public IList<string> Errors { get; set; }
        public ResponseData()
        {
            this.Errors = new List<string>();
        }
        public void AddError(string messageError)
        {
            this.Errors.Add(messageError);
        }

        public void SetData(TData data)
        {
            this.Data = data;
        }

        public void AddErrors(IList<string> errors)
        {
            foreach (var error in errors) {
                this.AddError(error);
            }
        }
    }
}
