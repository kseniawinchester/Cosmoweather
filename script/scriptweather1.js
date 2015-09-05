$(document).ready(function () {

	function f1() {
		navigator.geolocation.getCurrentPosition(showPosition);

		function showPosition(position) {

			var lat = position.coords.latitude;
			var lon = position.coords.longitude;


			$.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "s", function (data1) {

				var temp = data1.list[8].main.temp;
				var tempCel = Math.round(converKel(temp)) + 'C';
				var icon = data1.list[8].weather[0].icon;
				var description = data1.list[8].weather[0].description;
				var humidity = data1.list[8].main.humidity + '%';


				var today = new Date();
				var day1 = new Date(today.getTime() + 86400000);


				var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				var todayFormated = days[today.getUTCDay()] + ' ' + today.getDate() + '.' + months[today.getMonth()] + '.' + today.getFullYear();
				var day1Formatted = days[day1.getUTCDay()] + ' ' + day1.getDate() + '.' + months[day1.getMonth()] + '.' + day1.getFullYear();


				$('#description1').text(description);
				$('#icon1').html('<img src="images/' + icon + '.png"/>')
				$('#temp1').text("Day temperature: " + tempCel);
				$('#humidity1').text("Humidity: " + humidity);
				$('#day1').text(day1Formatted);
			});

		}
	};
	f1();

	function converKel(kelv) {
		var cel = kelv - 273;
		return cel;
	}


});
