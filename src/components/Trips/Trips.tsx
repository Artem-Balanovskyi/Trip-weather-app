import React from "react"
import {ITripsState} from "../../models/state.models/tripsState";
import {ITrip} from "../../models/trip.interface";
import {Trip} from "./Trip";
import s from "./Trips.module.css"

interface MyTripsProps {
    tripsPageState: ITripsState
}

export const Trips = ({tripsPageState}: MyTripsProps) => {

    const {trips} = tripsPageState

    return <>
        <div className={s.grid_container}>
            {trips.map((trip: ITrip) => {
                return <Trip
                    trip={trip}
                    key={trip.id}
                />
            })}
        </div>
    </>
}
