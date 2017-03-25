namespace api.Common
{
    using System.Collections.Generic;
    public interface IResponseData<TData>
    {
        void AddError(string messageError);
        void SetData(TData categories);
        void AddErrors(IList<string> errors);
    }
}
