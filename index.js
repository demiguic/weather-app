const container = document.querySelector('.container');
const search = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = 'd1fade4205db2399ce8c06f5512bb290';
    const city = document.querySelector('.search input').value;

    if (city == '')
        return;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&
    units=metric&appid=${APIKey}`).then(response => response.json()).then
    (json => {
        if(json.cod === '404'){

            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = block;
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description 

    })
})