let weather = {
  apiKey: "ae426803bf798c952683e2f1ab950978",
  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat, lon);
        this.fetchWeather(lat, lon);
      });
    } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
    }
  },
  fetchWeather: function (lat, lon) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  fetchSearchWeather: function () {
    var city = document.getElementById("place").value;
    var place = city.split(",");
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + place[0] + "," + place[1] + "&appid=" + this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    this.changeBackground(data);
  },

  changeBackground: function (data) {
    const { icon } = data.weather[0];
    if (icon == "01d" || icon == "01n") {
      document.body.style.backgroundImage = "url('img/sunny.webp')";
      document.querySelector(".card").style.backgroundImage = "url('img/sunny.webp')";
    } else if (icon == "02d" || icon == "02n") {
      document.body.style.backgroundImage = "url('img/few-clouds.webp')";
      document.querySelector(".card").style.backgroundImage = "url('img/few-clouds.webp')";
    } else if (icon == "03d" || icon == "03n") {
      document.body.style.backgroundImage = "url('img/cloud.webp')";
      document.querySelector(".card").style.backgroundImage = "url('img/cloud.webp')";
    } else if (icon == "04d" || icon == "04n") {
      document.body.style.backgroundImage = "url('img/cloud.webp')";
      document.querySelector(".card").style.backgroundImage = "url('img/cloud.webp')";
    } else if (icon == "09d" || icon == "09n") {
      document.body.style.backgroundImage = "url('img/rain.jpeg')";
      document.querySelector(".card").style.backgroundImage = "url('img/rain.jpeg')";
    } else if (icon == "10d" || icon == "10n") {
      document.body.style.backgroundImage = "url('img/rain.jpeg')";
      document.querySelector(".card").style.backgroundImage = "url('img/rain.jpeg')";
    } else if (icon == "11d" || icon == "11n") {
      document.body.style.backgroundImage = "url('img/thunder.webp')";
      document.querySelector(".card").style.backgroundImage = "url('img/thunder.webp')";
    } else if (icon == "13d" || icon == "13n") {
      document.body.style.backgroundImage = "url('img/snow.jpeg')";
      document.querySelector(".card").style.backgroundImage = "url('img/snow.jpeg')";
    } else if (icon == "50d" || icon == "50n") {
      document.body.style.backgroundImage = "url('img/mist.jpeg')";
      document.querySelector(".card").style.backgroundImage = "url('img/mist.jpeg')";
    }
  }
};


weather.getLocation();
