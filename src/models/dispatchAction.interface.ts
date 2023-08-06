import {ITrip} from "./trip.interface";

export interface IDispatchAction {
    type: string,
    trips?: ITrip[]
}