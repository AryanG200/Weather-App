document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim().toLowerCase();
    const weatherData = getSimulatedWeatherData(city);

    if (weatherData) {
        const weatherInfo = `
            <p>City: ${weatherData.city}</p>
            <p>Temperature: ${weatherData.temp} °C</p>
            <p>Weather: ${weatherData.description}</p>
            <p>Humidity: ${weatherData.humidity}%</p>
            <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } else {
        document.getElementById('weatherInfo').innerHTML = `<p>Weather data for "${city}" is not available.</p>`;
    }
});

function getSimulatedWeatherData(city) {
    const simulatedData = {
        thane: {
            city: 'Thane',
            temp: 30,
            description: 'Sunny',
            humidity: 70,
            windSpeed: 3
        },
        mumbai: {
            city: 'Mumbai',
            temp: 29,
            description: 'Partly Cloudy',
            humidity: 75,
            windSpeed: 4
        },
        delhi: {
            city: 'Delhi',
            temp: 35,
            description: 'Hot',
            humidity: 40,
            windSpeed: 2
        },
        bengaluru: {
            city: 'Bengaluru',
            temp: 25,
            description: 'Rainy',
            humidity: 80,
            windSpeed: 5
        }
    };

    return simulatedData[city] || null;
}
