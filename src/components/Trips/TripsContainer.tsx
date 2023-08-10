import {connect} from "react-redux";
import axios from "axios";
import {IState} from "../../models/state.models/state.interface";
import {Trips} from "./Trips";

let mapStateToProps = (state: IState) => {

    return {
        tripsPageState: state.tripsPageState
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchWeatherForecast: async (city: string, startDate: string, endDate: string) => {
            try {
                const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
                    `${city}/${startDate}/${endDate}` +
                    "?unitGroup=metric&include=days&" +
                    `key=${process.env.REACT_APP_API_KEY}&contentType=json`

                const {data} = await axios.get(url)

                console.log(`DATA: ${JSON.stringify(data)}`)
                return data
            } catch (err) {
                console.log(`fetchWeatherForecast: ${err}`)
            }
        },
    }
}

const TripsContainer = connect(mapStateToProps, mapDispatchToProps)(Trips)

export default TripsContainer;