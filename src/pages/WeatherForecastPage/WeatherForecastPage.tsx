import React from "react";
import s from "./WeatherForecastPage.module.css";
import TripsContainer from "../../components/Trips/TripsContainer";

export function WeatherForecastPage() {
    return (
        <>
            <div className={s.flex_container}>
                <div className={s.all_trips}>
                    <div className="title">
                        <p>Weather <b>Forecast</b></p>
                    </div>
                    <div className="search_bar">
                        <input type="text" placeholder="Seatch your trip"/>
                    </div>
                    <div className="trips_list">
                        <TripsContainer/>
                    </div>

                </div>
                <div className={s.selected_trip}>
                    Selected Trip
                </div>
            </div>
        </>
    )
}