const API_KEY = 'b8291aea7ff94825a8c201541230303'; 

const container = document.getElementById('container'); 


document.getElementById('weather').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('user_input').value; 
    container.querySelector('form p').innerHTML = ''; 
    document.getElementById('output').innerHTML = ''; 

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputValue}&aqi=yes`)
    .then(res => res.json())
    .then(data =>{
      
        console.log(data);
        document.getElementById('output').insertAdjacentHTML('afterbegin', 
        `
        <div>
            <div class="d-flex align-items-center justify-content-between">
                <p>Min: ${data.current.temp_c - Math.ceil(Math.random() * 5 )}</p>
                <p>${data.location.name}</p>
                <p>Max: ${data.current.temp_c + Math.ceil(Math.random() * 5 )}</p>
            </div>
            <div class="d-grid align-items-center justify-content-center text-center">
                <img src=${data.current.condition.icon} alt="icon">
                <p>${data.current.temp_c} C</p>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <p>Humidity: ${data.current.humidity}</p> 
                <p>Speed: ${data.current.wind_kph}Km/P</p>
            </div>
        </div>
        `) 
    })
    .catch(err => {
        container.querySelector('form p').innerHTML = 'Location not found'; 
    })

})