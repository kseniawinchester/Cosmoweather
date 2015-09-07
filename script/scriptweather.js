
	function firstInitialization() {
		navigator.geolocation.getCurrentPosition(function (position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			initializeDay(0, lat, lon);
			initializeDay(1, lat, lon);
			initializeDay(2, lat, lon);
			initializeDay(3, lat, lon);
			initializeDay(4, lat, lon);


		});
	}

	function initializeDay(dayNumber, lat, lon) {

		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


		$.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "s", function (data1) {

			var temp = data1.list[dayNumber * 8].main.temp;
			var tempCel = Math.round(temp - 273) + 'C';
			var icon = data1.list[dayNumber * 8].weather[0].icon;
			var description = data1.list[dayNumber * 8].weather[0].description;
			var humidity = data1.list[dayNumber * 8].main.humidity + '%';
			var city = data1.city.name;


			var today = new Date();
			var day1 = new Date(today.getTime() + dayNumber * 86400000);

			var day1Formatted = days[day1.getUTCDay()] + ' ' + day1.getDate() + '.' + months[day1.getMonth()] + '.' + day1.getFullYear();


			$('#description' + dayNumber).text(description);
			$('#icon' + dayNumber).html('<img src="images/' + icon + '.png"/>')
			$('#temp' + dayNumber).text(tempCel);
			$('#humidity' + dayNumber).text(humidity);
			$('#day' + dayNumber).text(day1Formatted);
			$('#location').text(city);
		});

	};

	function initializeDayForCity(latCity, lonCity) {
		initializeDay(0, latCity, lonCity);
		initializeDay(1, latCity, lonCity);
		initializeDay(2, latCity, lonCity);
		initializeDay(3, latCity, lonCity);	
		initializeDay(4, latCity, lonCity);

	}
$(document).ready(function () {

	firstInitialization();

});
