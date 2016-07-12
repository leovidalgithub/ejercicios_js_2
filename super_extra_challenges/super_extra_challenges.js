
//FIBONACCI

function fibonacci(n){
	var arr = [0,1];
	for (i = 1; i <= n; i++){
		arr.push(arr[i] + arr[i-1]);
	}
	console.log('Fibonacci');
	console.log(arr);
}

function fibonacci(n) {
	if ( n === 1) return 0;
	if ( n === 2) return 1;
	return fibonacci(n-1) + fibonacci(n-2);
}

function getFiboSequence(num) {
	var arrayFibo = [];
	for (var i=1;i<=num;i++) {
		arrayFibo.push( fibonacci(i));
	}
	return arrayFibo.join(' - ');
}


///////////////////////////////////////////////////////////////////////////////////////////
//FACTORIAL

// juanma - versión 1
function factorial(n) {
	if (n===1) {
		return 1;
	}
	else {
		return n*factorial(n-1);
	}
}

// juanma - versión 2
function factorial(n) {
	return (n===1) ? 1 : n*factorial(n-1);
}

//Carl y Leo
	var var1 = 5;
	function factorial(n) {
		if(n === 1) return var1;
	    var1 = var1 * (n - 1);
	    return factorial(n - 1);
	}

//tratando de utilizar Clousures
	function f(n) {
		var result = 1;
		return function() {
			return result++;
		}
	}



