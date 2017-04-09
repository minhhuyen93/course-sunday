import urlHelper from "./urlHelper";
let routeHelper = {
    getModuleRoutes: getModuleRoutes
}

export default routeHelper;

function getModuleRoutes(modules: Array<any>) {
    let routes: any = [];
    modules.forEach((module: string) => {
        routes.push({ path: module, loadChildren: urlHelper.resolveModule(module) })
    });
    return routes;
}