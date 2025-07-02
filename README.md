<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Weather Forecast App - README</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f6f9;
      color: #2c3e50;
      line-height: 1.6;
      padding: 40px;
      max-width: 800px;
      margin: auto;
    }

    h1, h2, h3 {
      color: #34495e;
    }

    code {
      background-color: #ecf0f1;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 15px;
    }

    pre {
      background: #ecf0f1;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
    }

    a {
      color: #3498db;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    ul {
      padding-left: 20px;
    }

    .screenshot {
      margin: 20px 0;
      text-align: center;
    }

    .screenshot img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .badge {
      background: #3498db;
      color: white;
      padding: 2px 6px;
      font-size: 12px;
      border-radius: 4px;
      margin-left: 5px;
    }
  </style>
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
