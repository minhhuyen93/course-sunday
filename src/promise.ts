export class PromiseFactory{
    public static create():Promise{
        return new Promise();
    }
}

export class Promise{
    private data:any = null;
    private successCallBack:any = null;
    private errors:any = null;
    private errorCallBack:any = null;
    public then(successCallBack:any){
        this.successCallBack = successCallBack;
        this.processPromise();
        return this;
    }
    public resolve(data:any){
        this.data = data;
        this.processPromise();
        return this;
    }

    public reject(errors:any){
        this.errors = errors;
        this.processPromise();
        return this;
    }

    public error(errorCallBack:any){
        this.errorCallBack = errorCallBack;
        this.processPromise();
        return this;
    }
    private processPromise(){
        if(this.data !=null && this.successCallBack !=null){
            this.successCallBack(this.data);
        }
        if(this.errors !=null && this.errorCallBack != null){
            this.errorCallBack(this.errors);
        }
    }
}