const apiKey = "API_KEY"; // api key
const searchInput = document.querySelector('.search');
const btn = document.querySelector('.submit');
const output = document.querySelector('.city');

btn.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city === "") {
        output.textContent = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Weather API error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            output.innerHTML = `
                <div>
                    <h2 class="h4 fw-bold mb-2">${data.name}, ${data.sys.country}</h2>
                    <p class="fs-5 mb-1">🌡️ ${data.main.temp}°C</p>
                    <p class="text-capitalize mb-1">🌤️ ${data.weather[0].description}</p>
                    <p class="mb-1">💧 Humidity: ${data.main.humidity}%</p>
                    <p class="mb-0">📍 Lat: ${data.coord.lat}, Lon: ${data.coord.lon}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error("❌ Error fetching weather data:", error);
            output.textContent = "City not found.";
        });
});