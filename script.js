const apikey='127a373ca4ff5da83987a86e5990ac88';
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchinp=document.querySelector(".res input");
const searchbu=document.querySelector(".res button");
const weatherIcon=document.querySelector(".wea");

async function getda(city){
    const resp=await fetch(apiurl+ city+`&appid=${apikey}`);
    if(resp.status==404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".weather").style.display='none';
    }
else{
    var data=await resp.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°C';
    document.querySelector(".pro").innerHTML=data.main.humidity + '%';
    document.querySelector(".wind").innerHTML=data.wind.speed + 'km/h';

    if(data.weather[0].main =='Cloudy'){
weatherIcon.src='weather-app-img/images/clouds.png';
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src='weather-app-img/images/clear.png';
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='weather-app-img/images/drizzle.png';
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src='weather-app-img/images/mist.png';
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src='weather-app-img/images/rain.png';
    }
    document.querySelector(".weather").style.display='block';
    document.querySelector(".error").style.display='none';
}
}

searchbu.addEventListener("click",()=>{
    getda(searchinp.value);
});
