function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "113934e23ac156be6ab6fe8f8eac4a03";  // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // If successful, display the weather data
        if (data.cod === 200) {
          const weatherDetails = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity} %</p>
          `;
          document.getElementById("weatherDetails").innerHTML = weatherDetails;
        } else {
          document.getElementById("weatherDetails").innerHTML = `<p>${data.message}</p>`;
        }
      })
      .catch(error => {
        console.error("Fetch error: ", error);
        document.getElementById("weatherDetails").innerHTML = `<p>Failed to retrieve data. Check console for details.</p>`;
      });
  }
  