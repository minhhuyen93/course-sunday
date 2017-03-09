"use strict";
class PromiseFactory {
    static create() {
        return new Promise();
    }
}
exports.PromiseFactory = PromiseFactory;
class Promise {
    constructor() {
        this.data = null;
        this.successCallBack = null;
        this.errors = null;
        this.errorCallBack = null;
    }
    then(successCallBack) {
        this.successCallBack = successCallBack;
        this.processPromise();
        return this;
    }
    resolve(data) {
        this.data = data;
        this.processPromise();
        return this;
    }
    reject(errors) {
        this.errors = errors;
        this.processPromise();
        return this;
    }
    error(errorCallBack) {
        this.errorCallBack = errorCallBack;
        this.processPromise();
        return this;
    }
    processPromise() {
        if (this.data != null && this.successCallBack != null) {
            this.successCallBack(this.data);
        }
        if (this.errors != null && this.errorCallBack != null) {
            this.errorCallBack(this.errors);
        }
    }
}
exports.Promise = Promise;
//# sourceMappingURL=promise.js.map