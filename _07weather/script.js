document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const displayWeatherInfo = document.getElementById("weather-info");
    const displayCityName = document.getElementById("city-name");
    const displayTemperature = document.getElementById("temperature");
    const displayDescription = document.getElementById("description");
    const displayErrorMessage = document.getElementById
    ("error-message");
    const API_KEY = `6cabcac7a7bfb1b29ba913035ce469a3`;

    getWeatherBtn.addEventListener("click", async () => {
      const city = cityInput.value.trim();
      if (!city) return;

      try {
        const data = await getWeatherData(city);
        displayWeatherData(data);
      } catch (error) {
        // This catches the "throw new Error" from below
        showError();
      }
    });

    async function getWeatherData(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        // Don't call showError here, just throw the error
        throw new Error(`city not found`);
      }
      return await response.json(); //takes that raw JSON string and converts it into a JavaScript Object. This process is called "parsing."
    }

    function displayWeatherData(data) {
      //destructing data
      const { name, main, weather } = data;
      displayCityName.textContent = name;
      displayTemperature.textContent = `Temperature : ${main.temp}`;
      displayDescription.textContent = `Weather : ${weather[0].description}`;

      // SUCCESS: Show weather, hide error
      displayWeatherInfo.classList.remove("hidden");
      displayErrorMessage.classList.add("hidden");
    }

    function showError() {
      // ERROR: Hide weather, show error
      displayWeatherInfo.classList.add("hidden"); // Change this to .add
      displayErrorMessage.classList.remove("hidden");
    }
})
