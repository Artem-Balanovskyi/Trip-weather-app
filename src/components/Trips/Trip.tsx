import React from "react";
import {ITrip} from "../../models/trip.interface";
import s from './Trip.module.css';

interface MyTripProps {
    trip: ITrip
}

export const Trip = ({trip}: MyTripProps) => {
    return <>
        <div className={s.container}>
            <div className={s.trip_image}>
                <img src={trip.image} alt="trip_image"/>
            </div>
            <div className={s.trip_name}>{trip.name}</div>
            <div className={s.trip_dates}>{trip.startDate} - {trip.endDate}</div>
        </div>
    </>
}