const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

async function getData(input = "cairo") {
    const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c4f55199c8c442e9a68114827240201&q=${input}&days=3`)
    const { current, location, forecast } = await data.json()

    document.querySelector(".areaName").innerHTML = location.name
    document.querySelector(".temp").innerHTML = current.temp_c + "℃"
    document.querySelector(".icon").src = current.condition.icon
    document.querySelector(".text").innerHTML = current.condition.text

    document.querySelector(".umbrella").src = `https://routeweather.netlify.app/images/icon-umberella@2x.png`
    document.querySelector(".umbValue").innerHTML = "&nbsp" + current.wind_mph + "%"

    document.querySelector(".wind").src = `https://routeweather.netlify.app/images/icon-wind@2x.png`
    document.querySelector(".windValue").innerHTML = "&nbsp" + current.wind_kph + "km/h"

    document.querySelector(".direction").src = `https://routeweather.netlify.app/images/icon-compass@2x.png`
    document.querySelector(".dirValue").innerHTML = "&nbsp" + current.wind_dir

    document.querySelector(".weekDays").innerHTML = weekDays[date.getDay()];
    document.querySelector(".date").innerHTML = (date.getDate()) + " " + months[date.getMonth()]

    document.querySelector(".weekDays1").innerHTML = weekDays[date.getDay() + 1]
    document.querySelector(".icon1").src = forecast.forecastday[1].day.condition.icon
    document.querySelector(".tempMax").innerHTML = forecast.forecastday[1].day.maxtemp_c + "℃"
    document.querySelector(".tempMin").innerHTML = forecast.forecastday[1].day.mintemp_c + "℃"
    document.querySelector(".text1").innerHTML = forecast.forecastday[1].day.condition.text

    document.querySelector(".weekDays2").innerHTML = weekDays[date.getDay() + 2]
    document.querySelector(".icon2").src = forecast.forecastday[2].day.condition.icon
    document.querySelector(".tempMax2").innerHTML = forecast.forecastday[2].day.maxtemp_c + "℃"
    document.querySelector(".tempMin2").innerHTML = forecast.forecastday[2].day.mintemp_c + "℃"
    document.querySelector(".text2").innerHTML = forecast.forecastday[2].day.condition.text
}

getData()


async function search(input) {
    const data = await fetch(`https://api.weatherapi.com/v1/search.json?key=34d39dfc5a944615900193628240701&q=${input}`)
    const result = await data.json()
    getData(input)
}

document.querySelector(".input").addEventListener("keyup", function (e) {
    e.preventDefault()
    var searchedInput = document.querySelector("input").value
    search(searchedInput)
})
