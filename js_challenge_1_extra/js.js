function sayHi( name, displayMode ) {
	var adjective = "awesome";
	return displayMode( "Hello " + name + ", you're " + moreAdjective + " " + adjective);
} 
​
function showConsole(msg) {
	console.log (msg);
}
​
function showAlert(msg) {
	alert(msg);
}
​​
sayHi("juanma", showConsole)
sayHi("juanma", showAlert)
sayHi("juanma", function(msg) { return "I SAY: " + msg;})


//////////////////////////////////////////////////////////////////////////////////////////////////////

function invoke_and_add(a, b){ return a() + b(); }
function one() { return 1; }
function two() { return 2; }

invoke_and_add(one, two); // ---> 3
invoke_and_add(one, function(){return 7;}) // ---> 8

//////////////////////////////////////////////////////////////////////////////////////////////////////
