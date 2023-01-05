var input = document.querySelector("#locationInput");
var btn = document.querySelector("#locationBtn");
var output = document.querySelector("#output");
var url = "http://api.weatherapi.com/v1/current.json?key=fa6430e826fd4c2086594110230501&q";
var temp = document.querySelector("#temp");
var condition = document.querySelector("#condition");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#region");
var kmph = document.querySelector("#kmph");




function apiurl(inputtext){
return url + "=" + inputtext + "&aqi=no"
}

function weatherChecker(){
  
  inputtext = input.value
  fetch(apiurl(inputtext)).then(Response => Response.json()).then(json => {
    temp.innerText+= " " +json.current.temp_c;
    condition.innerText+= " "+json.current.condition.text;
    wind.innerText+= " "+ json.current.wind_kph;
    humidity.innerText+= " "+ json.location.region;
  })
  
}




btn.addEventListener("click",weatherChecker)