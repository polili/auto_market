import { Observable } from "rxjs";
import { VehicleStatistics } from ".";

export interface IMarket {
  getVehicleStatistics(): Observable<Array<VehicleStatistics>>;
}