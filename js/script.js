
function getWeather(city) {

    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";  

}
  function handleFormSubmit(event) {
    event.preventDefault();
    
    var cityInput = document.getElementById("city-input");
    var city = cityInput.value.trim();
    
    if (city !== "") {
  
      getWeather(city);
      
 
      cityInput.value = "";
    }
  }
  

  function handleSearchHistoryClick(event) {
    var clickedCity = event.target.textContent;
    

    getWeather(clickedCity);
  }
  

  var searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", handleFormSubmit);
  
  var searchHistory = document.getElementById("search-history");
  searchHistory.addEventListener("click", handleSearchHistoryClick);
  