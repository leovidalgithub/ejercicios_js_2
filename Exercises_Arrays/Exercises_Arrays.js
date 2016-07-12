//https://github.com/juanmaguitar/exercises-javascript/tree/master/08-exercises-arrays

function is_array(myArray) {
	console.log((Array.isArray(myArray) ? 'Es un array' : 'No es un array'))
}
//-------------------------------------------------------------------------------
function array_Clone(myArray) {
	var arrayClone = [];
	for (var i = 0; i < myArray.length; i++) {
		arrayClone.push(myArray[i]);
	}
	return arrayClone;
}
//-------------------------------------------------------------------------------
function first(array, n) {
	if (!Array.isArray(array)) return 'No se envió un array';
	if (!n) n = 1;
	if (n > array.length) n = array.length;
	var resultArray = [];
	for (var i = 0; i < n; i++) {
		resultArray.push(array[i]);
	}
	return resultArray;
}
//-------------------------------------------------------------------------------
function last(array, n) {
	if (!Array.isArray(array)) return 'No se envió un array';
	if (!n) n = 1;
	if (n > array.length) n = array.length;
	var resultArray = [];
	for (var i = (array.length) - n; i < array.length; i++) {
		resultArray.push(array[i]);
	}
	return resultArray;
}
//-------------------------------------------------------------------------------
(function joinElements() {
	var myColor = ["Red", "Green", "White", "Black"];
	console.log(myColor.join(','));
	console.log(myColor.join('+'));
})();
//-------------------------------------------------------------------------------














