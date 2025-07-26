let cityInput=document.getElementById('city_name')
let button=document.querySelector('#search')
const api="25c9ca50d0e0e989475c94989297805d";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric";
let temperature=document.querySelector(".temperature")
let city_text=document.querySelector(".city")
let humidity=document.querySelector(".humidity")
let wind=document.querySelector(".wind")
let image=document.querySelector(".weather_image")

const data=async (city)=>{
    console.log("getting data....");
    let response= await fetch(url+`&appid=${api}&q=${city}`);
    if(response.status==404){
        document.querySelector(".error").style.display='block'
    }
    else{

        let output=await response.json()
    console.log(output)
    temperature.innerText=Math.round(output.main.temp)+"°c"
    city_text.innerText=output.name
    humidity.innerText=output.main.humidity+"%"
    wind.innerText=output.wind.speed+"km/hr"
    if(output.weather[0].main=="Clouds"){
        image.src="https://img.icons8.com/?size=100&id=15341&format=png&color=000000"

    }
    else if(output.weather[0].main=="Clear"){
        image.src="https://img.icons8.com/?size=100&id=XmZedKb7r3lU&format=png&color=000000"

    }
    else if(output.weather[0].main=="Mist"){
        image.src="https://img.icons8.com/?size=100&id=18537&format=png&color=000000"

    }
    else if(output.weather[0].main=="Drizzle"){
        image.src="https://img.icons8.com/?size=100&id=15343&format=png&color=000000"

    }
     else if(output.weather[0].main=="Rain"){
        image.src="https://img.icons8.com/?size=100&id=19542&format=png&color=000000"

    }
     document.querySelector(".error").style.display='none'
    }
    // console.log(response)
    
   
}



button.addEventListener(('click'),()=>{
   data(cityInput.value)
   
})
