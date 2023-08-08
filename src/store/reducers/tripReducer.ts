import {ITripsState} from "../../models/state.models/tripsState";
import {IDispatchAction} from "../../models/dispatchAction.interface";
import {ITrip} from "../../models/trip.interface";

const SET_TRIPS = 'SET_TRIPS'


const initialState: ITripsState = {
    searchValue: 'Hello',
    trips: [
        {
            id: 1,
            name: "Odessa",
            startDate: '2023 - 08-08',
            endDate: '2023-08-15',
            isActive: true
        },
        {
            id: 2,
            name: "Constanta",
            startDate: '2023 - 08-08',
            endDate: '2023-08-15',
            isActive: false
        },
        {
            id: 3,
            name: "Kiev",
            startDate: '2023 - 08-08',
            endDate: '2023-08-15',
            isActive: false
        },
    ]
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

