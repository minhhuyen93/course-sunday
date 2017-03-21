import { IObjectBuilder } from "./iobjectBuilder";
export class TransientObjectBuilder implements IObjectBuilder {
    private obj: any;
    constructor(obj: any) {
        this.obj = obj;
    }
    public build(): any {
        return new this.obj.instance();
    }
}