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

searchButton.on("click", function () {
  let userSearch = citySearch.val();
  key = "0faaa42019c798356adf79d4415bbb25";
  let cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&appid=${key}`;
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
        date = dayjs().format("MM/DD/YYYY");
        city = res.city.name;
        iconCode = res.list[0].weather[0].icon;
        iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        temp = res.list[0].main.temp_max;
        $("#date1").text(city + " " + "(" + date + ")");
        $("#wicon").attr("src", iconURL);
        $("#temp1").text("Temp: " + temp);
      });
    });
});
