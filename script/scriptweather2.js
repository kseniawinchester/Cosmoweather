$(document).ready(function () {
	function f2() {
		navigator.geolocation.getCurrentPosition(showPosition);

		function showPosition(position) {

			var lat = position.coords.latitude;
			var lon = position.coords.longitude;


			$.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "s", function (data2) {

				var temp = data2.list[15].main.temp;
				var tempCel = Math.round(converKel(temp)) + 'C';
				var icon = data2.list[15].weather[0].icon;
				var description = data2.list[15].weather[0].description;
				var humidity = data2.list[15].main.humidity + '%';


				var today = new Date();
				var day1 = new Date(today.getTime() + 86400000 * 2);


				var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			var todayFormated = days[today.getUTCDay()] +' '+ today.getDate() + '.' + months[today.getMonth()]+ '.' + today.getFullYear();
			var day1Formatted = days[day1.getUTCDay()]+' '+day1.getDate() + '.' + months[day1.getMonth()] + '.' + day1.getFullYear();
			


				$('#description2').text(description);
				$('#icon2').html('<img src="images/' + icon + '.png"/>')
				$('#temp2').text("Day temperature: " + tempCel);
				$('#humidity2').text("Humidity: " + humidity);
				$('#day2').text(day1Formatted);
			});

		}
	};
	f2();
	function converKel(kelv) {
		var cel = kelv - 273;
		return cel;
	}
});
