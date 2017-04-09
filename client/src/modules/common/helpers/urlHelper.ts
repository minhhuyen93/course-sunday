let urlHelper={
    resolveModule:resolveModule
}
export default urlHelper;

function resolveModule(name:string){
    return String.format("./src/modules/{0}/{0}Module#{1}Module", name ,String.toPascal(name));
}