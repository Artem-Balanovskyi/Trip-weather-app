import React from 'react';
import {Route, Routes} from "react-router-dom";
import {WeatherForecastPage} from "./pages/WeatherForecastPage/WeatherForecastPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<WeatherForecastPage />} />
            </Routes>
        </>
    )
}

export default App;
