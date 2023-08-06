import {ITripsState} from "../../models/state.models/tripsState";
import {IDispatchAction} from "../../models/dispatchAction.interface";
import {ITrip} from "../../models/trip.interface";

const SET_TRIPS = 'SET_TRIPS'


const initialState: ITripsState = {
    searchValue: '',
    trips: []
}

export const tripReducer = (state: ITripsState = initialState, action: IDispatchAction) => {
    switch (action.type) {
        case SET_TRIPS:
            if (action.trips)
                return {
                    ...state,
                    trips: [...action.trips]
                }
            break
        default:
            return state
    }
}

export const setTripsAC = (trips: ITrip[]) => ({type: SET_TRIPS, trips})

