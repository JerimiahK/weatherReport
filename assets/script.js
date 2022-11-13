const citySearch = $("#city-search");
const searchButton = $("#search-button");
let lat = "";
let lon = "";
let key = "";
let city = "";
let date = "";
let iconCode = "";
let iconURL = "";
let temp = "";
let wind = "";
let humidity = "";
let histButton = "";

searchButton.on("click", function () {
  let userSearch = citySearch.val();
  key = "0faaa42019c798356adf79d4415bbb25";
  let cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&appid=${key}`;
  $.ajax({
    url: cityUrl,
  })
    .then(function (res) {
      console.log(res);
      lon = res[0].lon;
      lat = res[0].lat;
    })
    .then(function () {
      let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
      $.ajax({
        url: weatherUrl,
      }).then(function (res) {
        console.log(res);
        // Today's Forecast
        date = dayjs().format("MM/DD/YYYY");
        city = res.city.name;
        iconCode = res.list[0].weather[0].icon;
        iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        temp = res.list[0].main.temp_max;
        wind = res.list[0].wind.speed;
        humidity = res.list[0].main.humidity;
        histButton = $("<button>").text(city);
        histButton.addClass("button");
        $("#history").append(histButton);
        $("#date1").text(city + " " + "(" + date + ")");
        $("#wicon").attr("src", iconURL);
        $("#temp1").text("Temp: " + temp + "°F");
        $("#wind1").text("Wind: " + wind + "MPH");
        $("#hum1").text("Humidity: " + humidity + "%");
        localStorage.setItem("currentCity", city);
        localStorage.setItem("currentDate", date);
        localStorage.setItem("currentIcon", iconURL);
        localStorage.setItem("currentWind", wind);
        localStorage.setItem("currentHumidity", humidity);
        //Day 1 Forecast
        date = dayjs().add(1, "day").format("MM/DD/YYYY");
        iconCode = res.list[7].weather[0].icon;
        iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        temp = res.list[7].main.temp_max;
        wind = res.list[7].wind.speed;
        humidity = res.list[7].main.humidity;
        $("#date2").text(date);
        $("#wicon2").attr("src", iconURL);
        $("#temp2").text("Temp: " + temp + "°F");
        $("#wind2").text("Wind: " + wind + "MPH");
        $("#hum2").text("Humidity: " + humidity + "%");
        localStorage.setItem("day1Date", date);
        localStorage.setItem("day1Icon", iconURL);
        localStorage.setItem("day1Wind", wind);
        localStorage.setItem("day1Humidity", humidity);
        //Day 2 Forecast
        date = dayjs().add(2, "day").format("MM/DD/YYYY");
        iconCode = res.list[15].weather[0].icon;
        iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        temp = res.list[15].main.temp_max;
        wind = res.list[15].wind.speed;
        humidity = res.list[15].main.humidity;
        $("#date3").text(date);
        $("#wicon3").attr("src", iconURL);
        $("#temp3").text("Temp: " + temp + "°F");
        $("#wind3").text("Wind: " + wind + "MPH");
        $("#hum3").text("Humidity: " + humidity + "%");
        localStorage.setItem("day2Date", date);
        localStorage.setItem("day2Icon", iconURL);
        localStorage.setItem("day2Wind", wind);
        localStorage.setItem("day2Humidity", humidity);
        //Day 3 Forecast
        date = dayjs().add(3, "day").format("MM/DD/YYYY");
        iconCode = res.list[23].weather[0].icon;
        iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        temp = res.list[23].main.temp_max;
        wind = res.list[23].wind.speed;
        humidity = res.list[23].main.humidity;
        $("#date4").text(date);
        $("#wicon4").attr("src", iconURL);
        $("#temp4").text("Temp: " + temp + "°F");
        $("#wind4").text("Wind: " + wind + "MPH");
        $("#hum4").text("Humidity: " + humidity + "%");
        localStorage.setItem("day3Date", date);
        localStorage.setItem("day3Icon", iconURL);
        localStorage.setItem("day3Wind", wind);
        localStorage.setItem("day3Humidity", humidity);
        //Day 4 Forecast
        date = dayjs().add(4, "day").format("MM/DD/YYYY");
        iconCode = res.list[31].weather[0].icon;
        iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        temp = res.list[31].main.temp_max;
        wind = res.list[31].wind.speed;
        humidity = res.list[31].main.humidity;
        $("#date5").text(date);
        $("#wicon5").attr("src", iconURL);
        $("#temp5").text("Temp: " + temp + "°F");
        $("#wind5").text("Wind: " + wind + "MPH");
        $("#hum5").text("Humidity: " + humidity + "%");
        localStorage.setItem("day4Date", date);
        localStorage.setItem("day4Icon", iconURL);
        localStorage.setItem("day4Wind", wind);
        localStorage.setItem("day4Humidity", humidity);
        //Day 5 Forecast
        date = dayjs().add(5, "day").format("MM/DD/YYYY");
        iconCode = res.list[39].weather[0].icon;
        iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        temp = res.list[39].main.temp_max;
        wind = res.list[39].wind.speed;
        humidity = res.list[39].main.humidity;
        $("#date6").text(date);
        $("#wicon6").attr("src", iconURL);
        $("#temp6").text("Temp: " + temp + "°F");
        $("#wind6").text("Wind: " + wind + "MPH");
        $("#hum6").text("Humidity: " + humidity + "%");
        localStorage.setItem("day5Date", date);
        localStorage.setItem("day5Icon", iconURL);
        localStorage.setItem("day5Wind", wind);
        localStorage.setItem("day5Humidity", humidity);

        histButton.on("click", function (event) {
          let userSearch = event.target.textContent;
          key = "0faaa42019c798356adf79d4415bbb25";
          let cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&appid=${key}`;
          $.ajax({
            url: cityUrl,
          })
            .then(function (res) {
              console.log(res);
              lon = res[0].lon;
              lat = res[0].lat;
            })
            .then(function () {
              let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
              $.ajax({
                url: weatherUrl,
              }).then(function (res) {
                console.log(res);
                // Today's Forecast
                date = dayjs().format("MM/DD/YYYY");
                city = res.city.name;
                iconCode = res.list[0].weather[0].icon;
                iconURL =
                  "http://openweathermap.org/img/wn/" + iconCode + ".png";
                temp = res.list[0].main.temp_max;
                wind = res.list[0].wind.speed;
                humidity = res.list[0].main.humidity;
                $("#date1").text(city + " " + "(" + date + ")");
                $("#wicon").attr("src", iconURL);
                $("#temp1").text("Temp: " + temp + "°F");
                $("#wind1").text("Wind: " + wind + "MPH");
                $("#hum1").text("Humidity: " + humidity + "%");
                localStorage.setItem("currentCity", city);
                localStorage.setItem("currentDate", date);
                localStorage.setItem("currentIcon", iconURL);
                localStorage.setItem("currentWind", wind);
                localStorage.setItem("currentHumidity", humidity);
                //Day 1 Forecast
                date = dayjs().add(1, "day").format("MM/DD/YYYY");
                iconCode = res.list[7].weather[0].icon;
                iconURL =
                  "http://openweathermap.org/img/wn/" + iconCode + ".png";
                temp = res.list[7].main.temp_max;
                wind = res.list[7].wind.speed;
                humidity = res.list[7].main.humidity;
                $("#date2").text(date);
                $("#wicon2").attr("src", iconURL);
                $("#temp2").text("Temp: " + temp + "°F");
                $("#wind2").text("Wind: " + wind + "MPH");
                $("#hum2").text("Humidity: " + humidity + "%");
                localStorage.setItem("day1Date", date);
                localStorage.setItem("day1Icon", iconURL);
                localStorage.setItem("day1Wind", wind);
                localStorage.setItem("day1Humidity", humidity);
                //Day 2 Forecast
                date = dayjs().add(2, "day").format("MM/DD/YYYY");
                iconCode = res.list[15].weather[0].icon;
                iconURL =
                  "http://openweathermap.org/img/wn/" + iconCode + ".png";
                temp = res.list[15].main.temp_max;
                wind = res.list[15].wind.speed;
                humidity = res.list[15].main.humidity;
                $("#date3").text(date);
                $("#wicon3").attr("src", iconURL);
                $("#temp3").text("Temp: " + temp + "°F");
                $("#wind3").text("Wind: " + wind + "MPH");
                $("#hum3").text("Humidity: " + humidity + "%");
                localStorage.setItem("day2Date", date);
                localStorage.setItem("day2Icon", iconURL);
                localStorage.setItem("day2Wind", wind);
                localStorage.setItem("day2Humidity", humidity);
                //Day 3 Forecast
                date = dayjs().add(3, "day").format("MM/DD/YYYY");
                iconCode = res.list[23].weather[0].icon;
                iconURL =
                  "http://openweathermap.org/img/wn/" + iconCode + ".png";
                temp = res.list[23].main.temp_max;
                wind = res.list[23].wind.speed;
                humidity = res.list[23].main.humidity;
                $("#date4").text(date);
                $("#wicon4").attr("src", iconURL);
                $("#temp4").text("Temp: " + temp + "°F");
                $("#wind4").text("Wind: " + wind + "MPH");
                $("#hum4").text("Humidity: " + humidity + "%");
                localStorage.setItem("day3Date", date);
                localStorage.setItem("day3Icon", iconURL);
                localStorage.setItem("day3Wind", wind);
                localStorage.setItem("day3Humidity", humidity);
                //Day 4 Forecast
                date = dayjs().add(4, "day").format("MM/DD/YYYY");
                iconCode = res.list[31].weather[0].icon;
                iconURL =
                  "http://openweathermap.org/img/wn/" + iconCode + ".png";
                temp = res.list[31].main.temp_max;
                wind = res.list[31].wind.speed;
                humidity = res.list[31].main.humidity;
                $("#date5").text(date);
                $("#wicon5").attr("src", iconURL);
                $("#temp5").text("Temp: " + temp + "°F");
                $("#wind5").text("Wind: " + wind + "MPH");
                $("#hum5").text("Humidity: " + humidity + "%");
                localStorage.setItem("day4Date", date);
                localStorage.setItem("day4Icon", iconURL);
                localStorage.setItem("day4Wind", wind);
                localStorage.setItem("day4Humidity", humidity);
                //Day 5 Forecast
                date = dayjs().add(5, "day").format("MM/DD/YYYY");
                iconCode = res.list[39].weather[0].icon;
                iconURL =
                  "http://openweathermap.org/img/wn/" + iconCode + ".png";
                temp = res.list[39].main.temp_max;
                wind = res.list[39].wind.speed;
                humidity = res.list[39].main.humidity;
                $("#date6").text(date);
                $("#wicon6").attr("src", iconURL);
                $("#temp6").text("Temp: " + temp + "°F");
                $("#wind6").text("Wind: " + wind + "MPH");
                $("#hum6").text("Humidity: " + humidity + "%");
                localStorage.setItem("day5Date", date);
                localStorage.setItem("day5Icon", iconURL);
                localStorage.setItem("day5Wind", wind);
                localStorage.setItem("day5Humidity", humidity);
              });
            });
        });
      });
    });
});
