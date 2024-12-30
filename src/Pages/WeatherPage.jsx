import { useEffect, useState } from "react";
import WeatherRow from "../Components/WeatherRow";
import WeatherSummary from "../Components/WeatherSummary";
import getWeather from "../api/weatherApi";
import Loader from "../Components/Loader";

// This function will fetch coordinates of lat and lon
const fetchCoordinates = (callback) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      console.log(latitude, longitude);
      callback(latitude, longitude);
    },
    (err) => console.error(err)
  );
};

function WeatherPage() {
  const [todayWeather, setTodayWeather] = useState({});
  const [weekWeather, setWeekWeather] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const isDay = todayWeather.isDay ?? true;

  useEffect(() => {
    fetchCoordinates(async (latitude, longitude) => {
      setIsLoading(true);
      const weatherInfo = await getWeather({ latitude, longitude });
      convertToStateVariable(weatherInfo);
      setIsLoading(false);
    });
  }, []);

  const convertToStateVariable = (tempWeekWeather) => {
    let fetchedWeatherInfo = [];
    for (let i = 0; i < tempWeekWeather.daily.time.length; i++) {
      fetchedWeatherInfo.push({
        date: new Date(tempWeekWeather.daily.time[i]),
        maxTemperature: tempWeekWeather.daily.temperature_2m_max[i],
        minTemperature: tempWeekWeather.daily.temperature_2m_min[i],
        weatherCode: tempWeekWeather.daily.weathercode[i],
      });
    }
    setWeekWeather(fetchedWeatherInfo);

    let currentWeather = tempWeekWeather.current_weather;
    currentWeather.time = new Date(currentWeather.time);
    currentWeather.isDay = currentWeather.is_day === 1 ? true : false;
    delete currentWeather.is_day;
    setTodayWeather(currentWeather);
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className={isDay ? "day" : "day dark"}>
      <h1 className={isDay ? "ui-header my-heading" : "ui-header dark"}>
        Weather
      </h1>
      <button
        className="ui icon button"
        style={{ float: "right" }}
        onClick={() => setIsCelsius(!isCelsius)}
      >
        {isCelsius ? "°F" : "°C"}
      </button>
      <div>
        <WeatherSummary currentWeather={todayWeather} isCelsius={isCelsius} />
        <table
          className="ui very basic table"
          style={!isDay ? { backgroundColor: "black", color: "white" } : {}}
        >
          <thead
            className="table-custom"
            style={!isDay ? { backgroundColor: "black", color: "white" } : {}}
          >
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody className="table-custom">
            {weekWeather.map((weather, index) => (
              <WeatherRow key={index} weather={weather} isCelsius={isCelsius} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherPage;
