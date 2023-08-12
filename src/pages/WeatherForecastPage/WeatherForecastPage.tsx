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
                    <div className={s.flex_wrapper}>
                        <div className={s.trips_list}>
                            <TripsContainer/>
                        </div>
                        <div className={s.add_trip}>
                            Add Trip
                        </div>
                    </div>
                    <div className="weakly_weather">
                        Week
                    </div>
                </div>
                <div className={s.selected_trip}>
                    Selected Trip
                </div>
            </div>
        </>
    )
}