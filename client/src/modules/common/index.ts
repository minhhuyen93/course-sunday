import { HelperFacade } from "./models/helperFacade";
export * from "./ioc/enum";
export * from "./models/promise";
export * from "./connector/iConnector";
export * from "./connector/httpConnector";
export * from "./models/basePage";
import iocHelper from "./ioc/iocHelper";
import appHelper from "./helpers/appHelper";

let helperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;
export default helperFacade;