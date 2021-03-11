/*setTimeout(logoutUser, 5000);

function logoutUser() {
	window.location = "LogOut.html";
}*/

var timer = document.getElementById("timer");
var duration = 14;

setInterval(updateTime, 1000);

function updateTime() {
	duration --;
	if (duration < 1) {
		window.location = "LogOut.html";
	} else if (duration <= 10) {
		timer.innerText = "Time out withing " + duration;
	}
}

window.addEventListener("mousemove", resetTimer);

function resetTimer() {
	duration = 14;
}