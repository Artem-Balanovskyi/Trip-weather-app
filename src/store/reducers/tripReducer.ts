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
            image: "https://lp-cms-production.imgix.net/2019-06/a75115c4c0810eb44880443a7f0324ae-lpl-odesa_opera_ballet_theatre.jpg",
            startDate: '2023-08-08',
            endDate: '2023-08-15',
            isActive: true
        },
        {
            id: 2,
            name: "Constanta",
            image: "https://www.rjontour.com/wp-content/uploads/2020/04/Constanta-Casino-1024x750.jpg.webp",
            startDate: '2023-08-08',
            endDate: '2023-08-15',
            isActive: false
        },
        {
            id: 3,
            name: "Kiev",
            image: "https://media.istockphoto.com/id/1347233654/photo/motherland.jpg?s=612x612&w=0&k=20&c=afq2AFIEg-EHjVjq_9qUmnDTUMeDQXhWXnRtrVrOuD4=",
            startDate: '2023-08-08',
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


