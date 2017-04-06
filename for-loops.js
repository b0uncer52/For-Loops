for (var i = 5; i <= 120; i+=10) {
	console.log("Current value is " + i);
}
for (var i = 4096; i > 1; i/=2) {
	console.log("Current value is " + i);
}
var amPres = ["George Washington", "John Adams", "Thomas Jefferson", "President 4", "5th President"];
for (var i = 0; i < amPres.length; i++) {
	console.log("President #" + (i + 1) + " was " + amPres[i]);
}
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
var counter = 0;
for (var obj in antSpecies) {
	counter++;
	console.log("Ant #" + counter + " is " + obj);
}