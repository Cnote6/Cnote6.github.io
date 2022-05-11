function customAlert(dialog) {
this.render = function() {
	var winW = window.innerWidth;
	var winH = window.innerHeight;
	var dialogOverlay = document.getElementById("dialogOverlay");
	var dialogBox = document.getElementById("dialogBox);
	dialogOverlay.style.display = "block";
	dialogOverlay.style.height = winH + "px";
	dialogBox.style.left = (winW / 2) - (550 * 0.5) + "px";
	dialogBox.style.top = "100px";
	dialogBox.style.display = "block";
}
this.ok = function() {
}
}
var alert = new customAlert();

