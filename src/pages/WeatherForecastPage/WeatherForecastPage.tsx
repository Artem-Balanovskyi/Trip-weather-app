import React from "react";
import s from "./WeatherForecastPage.module.css";

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
                        Trips
                    </div>
                    
                </div>
                <div className={s.selected_trip}>
                    Selected Trip
                </div>
            </div>
        </>
    )
}