let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


let getWeather = () => {
    let cityValue = cityRef.value;
    // if input field is empty
    if(cityValue.length == 0){
        result.innerHTML =`<h3 class="msg">Please enter a city name</h3>`;
    }
    // if input field is not empty
    else{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    //  clear the input field
      cityRef.value="";
      fetch(url)
      .then((resp)=>resp.json())
    //   if city name is valid
      .then((data)=>{
        console.log(data);
        result.innerHTML=`
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}&#176;</h1>
        <div class="temp-container">
        <div>
        <h4 class="title">min</h4>
        <h4 class="temp">${data.main.temp_min}</h4>
        </div>
        <div>
        <h4 class="title">max</h4>
        <h4 class="temp">${data.main.temp_max}</h4>
        </div>
        <div>
        <h4 class="title">Humidity</h4>
        <h4 class="temp">${data.main.humidity}</h4>
        </div>
        <div>
        <h4 class="title">Pressure</h4>
        <h4 class="temp">${data.main.pressure}</h4>
        </div>
        <div>
        <h4 class="title">Wind Speed</h4>
        <h4 class="temp">${data.wind.speed}</h4>
        </div>
        </div>`;
      })
    //   if city name is not valid
    .catch(()=>{
        result.innerHTML=`<h3 class="msg">City not found</h3>`;
    });
    }
};
searchBtn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);