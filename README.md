The Weather App is a dynamic, user-friendly web application that provides real-time weather information for any location. The app leverages Axios for fetching weather data from an API and uses the browser's navigator.geolocation to fetch the user's current geographical coordinates. It features a responsive, intuitive UI with conditional rendering, ensuring a smooth experience across different devices.

Key features of the app include:

Real-Time Weather Information: Using Axios, the app fetches the current weather data from an API based on the user's current location.

Geolocation Integration: The app uses the navigator.geolocation API to automatically retrieve the user's current coordinates and show the weather for that location.

Temperature Conversion: A function allows users to toggle between Celsius and Fahrenheit by clicking a button. The temperature is dynamically updated based on the user selection.

Day/Night UI Theme: The app intelligently detects whether it is day or night using the weather's sunrise and sunset times and adjusts the theme accordingly. During the day, the UI is bright and visually appealing, while at night, the UI switches to a dark theme for a comfortable viewing experience.

7-Day Weather Forecast: The app displays the 7-day weather forecast, showing the low and high temperatures for each day along with the weather conditions. It uses WMO (World Meteorological Organization) codes to represent the weather status (e.g., clear skies, rain, snow) in an easy-to-understand format.

Conditional Rendering: The app uses React's useEffect and useState hooks to manage the fetching of weather data, handle API responses, and conditionally render content based on the time of day, location, and selected unit (Celsius/Fahrenheit).

With a modern design, the Weather App offers an interactive experience, allowing users to easily check the weather for their current location, understand the forecast for the upcoming days, and switch between temperature units seamlessly.

Tech Stack:
Frontend: React.js
State Management: React Hooks (useState, useEffect)
Weather Data API: Axios for API calls
Geolocation API: navigator.geolocation for fetching user location coordinates
Weather Codes: WMO weather codes for accurate weather status representation
UI: Responsive design with conditional themes (Day/Night)
