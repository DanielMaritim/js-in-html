function getStuff () {
	document.querySelector('#me').onclick=talk;
}
function talk () {
	alert('click me!');
}
window.onload=getStuff;
