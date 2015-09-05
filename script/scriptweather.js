$(document).ready(function () {

	navigator.geolocation.getCurrentPosition(showPosition);

	function showPosition(position) {

		var lat = position.coords.latitude;
		var lon = position.coords.longitude;


		$.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "s", function (data) {

			var today = new Date();
			var day1 = new Date(today.getTime() + 86400000);
			var day2 = new Date(day1.getTime() + 86400000);
			var day3 = new Date(day2.getTime() + 86400000);


			
			var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			 var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			var todayFormated = days[today.getUTCDay()] +' '+ today.getDate() + '.' + months[today.getMonth()]+ '.' + today.getFullYear();
			var day1Formatted = days[day1.getUTCDay()]+' '+day1.getDate() + '.' + months[day1.getMonth()] + '.' + day1.getFullYear();
			var day2Formatted = days[day2.getUTCDay()]+' '+day2.getDate() + '.' + months[day2.getMonth()] + '.' + day2.getFullYear();
			var day3Formatted = days[day3.getUTCDay()]+' '+day3.getDate() + '.' + months[day3.getMonth()] + '.' + day3.getFullYear();




			var temp = data.main.temp;
			var city = data.name;
			var tempCel = Math.round(converKel(temp)) + '\u2103';
			var icon = data.weather[0].icon;
			var description = data.weather[0].description;
			var humidity = data.main.humidity + '%';

			$('#description').text(description);
			$('#icon').html('<img src="images/' + icon + '.png"/>')
			$('#temp').text(tempCel);
			$('#humidity').text(humidity);
			$('#location').text(city);
			$('#date').text(todayFormated);
		});

	}




	function converKel(kelv) {
		var cel = kelv - 273;
		return cel;
	}

});
