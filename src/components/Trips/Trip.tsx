import React from "react";
import {ITrip} from "../../models/trip.interface";
import s from './Trip.module.css';

interface MyTripProps {
    trip: ITrip
}

export const Trip = ({trip}: MyTripProps) => {

    return <>
        <div className={s.container}>
            <div>Image</div>
            <div>{trip.name}</div>
            <div>{trip.startDate} - {trip.endDate}</div>
        </div>
    </>
}