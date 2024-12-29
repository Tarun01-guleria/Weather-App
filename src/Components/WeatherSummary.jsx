import { convertToFahrenheit, getWeatherTypeFromCode } from "../weatherUtil";

function WeatherSummary({
  currentWeather: { temperature, weathercode },
  isCelsius,
}) {
  const weatherDescription = getWeatherTypeFromCode(weathercode);
  console.log("Weather Description:", weatherDescription);

  return (
    <div>
      <h1 className="ui-header">
        {isCelsius
          ? `${temperature} °C`
          : `${convertToFahrenheit(temperature)} °F`}{" "}
        | {weatherDescription}
      </h1>
    </div>
  );
}

export default WeatherSummary;
