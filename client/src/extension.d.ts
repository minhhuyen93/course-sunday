declare interface Window{
    ioc:any
}

declare interface Array<T>{
    firstOrDefault(callBack:any):any;
}

interface StringConstructor{
    format(...param:Array<any>):string;
    toPascal(str:string):string;
}

interface String{}