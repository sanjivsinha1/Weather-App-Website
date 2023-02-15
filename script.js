const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "567c5a9105msh55406b38cf45291p1f80bajsn351bfc2f2ace",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{

    cityName.innerHTML=city
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            
            // cloud_pct.innerHTML = response.cloud_pct;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
        })
        .catch((err) => console.error(err));
    }

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


const getGujarat= (city1)=>{

    cityName1.innerHTML=city1
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city1,options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            
            cloud_pct3.innerHTML = response.cloud_pct;
            feels_like3.innerHTML = response.feels_like;
            humidity3.innerHTML = response.humidity;
            // humidity2.innerHTML = response.humidity;
            max_temp3.innerHTML = response.max_temp;
            min_temp3.innerHTML = response.min_temp;
            sunrise3.innerHTML = response.sunrise;
            sunset3.innerHTML = response.sunset;
            temp3.innerHTML = response.temp;
            // temp2.innerHTML = response.temp;
            wind_degrees3.innerHTML = response.wind_degrees;
            wind_speed3.innerHTML = response.wind_speed;
            // wind_speed2.innerHTML = response.wind_speed;
        })
        .catch((err) => console.error(err));
    }

getGujarat("Gujarat")


const getMumbai= (city2)=>{

  cityName2.innerHTML=city2
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city2,options)
      .then((response) => response.json())
      .then((response) => {
          console.log(response);
          
          cloud_pct4.innerHTML = response.cloud_pct;
          feels_like4.innerHTML = response.feels_like;
          humidity4.innerHTML = response.humidity;
          // humidity2.innerHTML = response.humidity;
          max_temp4.innerHTML = response.max_temp;
          min_temp4.innerHTML = response.min_temp;
          sunrise4.innerHTML = response.sunrise;
          sunset4.innerHTML = response.sunset;
          temp4.innerHTML = response.temp;
          // temp2.innerHTML = response.temp;
          wind_degrees4.innerHTML = response.wind_degrees;
          wind_speed4.innerHTML = response.wind_speed;
          // wind_speed2.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  }

getMumbai("Mumbai")


const getLucknow= (city3)=>{

  cityName3.innerHTML=city3
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city3,options)
      .then((response) => response.json())
      .then((response) => {
          console.log(response);
          
          cloud_pct5.innerHTML = response.cloud_pct;
          feels_like5.innerHTML = response.feels_like;
          humidity5.innerHTML = response.humidity;
          // humidity2.innerHTML = response.humidity;
          max_temp5.innerHTML = response.max_temp;
          min_temp5.innerHTML = response.min_temp;
          sunrise5.innerHTML = response.sunrise;
          sunset5.innerHTML = response.sunset;
          temp5.innerHTML = response.temp;
          // temp2.innerHTML = response.temp;
          wind_degrees5.innerHTML = response.wind_degrees;
          wind_speed5.innerHTML = response.wind_speed;
          // wind_speed2.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  }

getLucknow("Lucknow")


const getKolkata= (city4)=>{

  cityName4.innerHTML=city4
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city4,options)
      .then((response) => response.json())
      .then((response) => {
          console.log(response);
          
          cloud_pct6.innerHTML = response.cloud_pct;
          feels_like6.innerHTML = response.feels_like;
          humidity6.innerHTML = response.humidity;
          // humidity2.innerHTML = response.humidity;
          max_temp6.innerHTML = response.max_temp;
          min_temp6.innerHTML = response.min_temp;
          sunrise6.innerHTML = response.sunrise;
          sunset6.innerHTML = response.sunset;
          temp6.innerHTML = response.temp;
          // temp2.innerHTML = response.temp;
          wind_degrees6.innerHTML = response.wind_degrees;
          wind_speed6.innerHTML = response.wind_speed;
          // wind_speed2.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  }

getKolkata("Kolkata")