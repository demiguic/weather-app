const container = document.querySelector('.container');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const search = document.querySelector('.search button');
const input = document.querySelector('.search input');

// Listen for click on search button
search.addEventListener('click', () => {
    searchWeather();
});

// Listen for enter key on input
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchWeather();
    }
});

function searchWeather() {
    const APIKey = 'd1fade4205db2399ce8c06f5512bb290';
    const city = document.querySelector('.search input').value;
    const lang = 'pt'

    if (city == '')
        return;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=${lang}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '450px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                // document.body.style.backgroundColor = "#3E3A39";
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'assets/clear.png';
                    // document.body.style.backgroundColor = "#D55A35";
                    break;
                case 'Rain':
                    image.src = 'assets/rain.png';
                    // document.body.style.backgroundColor = "#1A95C0";
                    break;
                case 'Snow':
                    image.src = 'assets/snow.png';
                    // document.body.style.backgroundColor = "#767CB6";
                    break;
                case 'Clouds':
                    image.src = 'assets/cloud.png';
                    // document.body.style.backgroundColor = "#A1ABBC";
                    break;
                case 'Haze':
                    image.src = 'assets/haze.png';
                    // document.body.style.backgroundColor = "#8E738D";
                    break;
                default:
                    image.src = 'assets/default.png';
                // document.body.style.backgroundColor ="#B1A1C2";
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '605px';
        });
}