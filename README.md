<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Weather Forecast App - README</title>
 
</head>
<body>

  <h1>🌦️ Weather Forecast App</h1>
  <p>A simple web app that fetches real-time weather information for any city using the <a href="https://openweathermap.org/">OpenWeatherMap API</a>.</p>

  <h2>📸 Screenshot</h2>
  <div class="screenshot">
    <img src="assets/screenshot.png" alt="App Screenshot" />
  </div>

  <h2>🚀 Features</h2>
  <ul>
    <li>Search weather by city name</li>
    <li>Displays:
      <ul>
        <li>Current temperature (°C)</li>
        <li>Max & Min temperature</li>
        <li>Humidity</li>
        <li>Weather conditions</li>
      </ul>
    </li>
    <li>Responsive and minimal UI</li>
  </ul>

  <h2>🧠 Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
    <li><strong>API:</strong> <a href="https://openweathermap.org/current">OpenWeatherMap</a></li>
  </ul>

  <h2>📁 Folder Structure</h2>
  <pre><code>weather-app/
│
├── index.html
├── weather_app.css
├── weather_app.js
└── assets/
    └── screenshot.png
</code></pre>

  <h2>⚙️ How to Run</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/your-username/weather-forecast-app.git</code></pre>
    </li>
    <li>Get your API key from <a href="https://openweathermap.org/api">OpenWeatherMap</a></li>
    <li>Insert your API key into <code>weather_app.js</code>:
      <pre><code>const apiKey = "YOUR_API_KEY_HERE";</code></pre>
    </li>
    <li>Open <code>index.html</code> in your browser and enjoy!</li>
  </ol>

  <h2>🧩 Future Improvements</h2>
  <ul>
    <li>Weather icons</li>
    <li>Dark/light mode toggle</li>
    <li>5-day forecast integration</li>
    <li>Geolocation-based weather</li>
  </ul>

  <h2>📜 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>.</p>

  <h2>👤 Author</h2>
  <p><strong>Dhruv Kajla</strong><br>
  📧 Email: <a href="mailto:shail020604@gmail.com">shail020604@gmail.com</a></p>

</body>
</html>
