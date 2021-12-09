import { InjectionToken } from "@angular/core";
import { IMarket } from "../domain";

export const MARKET_SERVICE = new InjectionToken<IMarket>('Provide information for vehicles');
