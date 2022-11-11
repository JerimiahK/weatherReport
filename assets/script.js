const citySearch = $("#city-search");
const searchButton = $("#search-button");

searchButton.on("click", function () {
  let userSearch = citySearch.val();
  $.ajax({
    url:
      "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={fcc02eb85ac2564151e959fb7ac42c5b}" +
      userSearch,
  }).then(function (res) {
    console.log(res);
  });
  $.ajax({
    url:
      "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={fcc02eb85ac2564151e959fb7ac42c5}" +
      userSearch,
  }).then(function (res) {
    console.log(res);
  });
});
