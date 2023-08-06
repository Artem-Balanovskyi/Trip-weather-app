import {ITrip} from "../trip.interface";

export interface ITripsState {
    activeTrip?: ITrip,
    searchValue: string,
    trips: ITrip[],
}