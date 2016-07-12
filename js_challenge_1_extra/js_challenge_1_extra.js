function calculator(ope,a,b){
	switch (ope) { 
	  case 'suma':
  	  	   console.log('Suma:' + a + ' + ' + b + ' = ' + (a + b));
		   break; 
	  case 'resta':
   	  	   console.log('Resta:' + a + ' - ' + b + ' = ' + (a - b));
		   break;
	  case 'multiplicación':
   	  	   console.log('Multiplicación:' + a + ' x ' + b + ' = ' + (a * b));
	  	   break;
	  case 'división':
   	  	   console.log('División:' + a + ' / ' + b + ' = ' + (a / b));
	   	   break;
	  default:
	  	   console.log('No se reconoce la operación');
	    break;
	}
} // fn

function calculator_Advanced(ope){
	var result = 0;
	if (ope == 'suma' || ope == 'resta'){result = 0;}
	if (ope == 'multi' || ope == 'divi'){result = 1;}
	for (i = 1; i <= arguments.length -1; i++){
		if (ope == 'suma'){result += arguments[i];}
		if (ope == 'resta'){result -= arguments[i];}
		if (ope == 'multi'){result *= arguments[i];}
		if (ope == 'divi'){result /= arguments[i];}
	}
	console.log(result);
}

function getFullName(name, surname){
	console.log("Your full name is " + name + " " + surname);
}

function isNumber(num){
	if ( isNaN(num) ){
		console.log('NO es un número');
	}else{
		console.log('SÍ es un número');
	}

}

function isString(str){
	if ( typeof(str) === "string" ){
		console.log('SÍ es una cadena');
	}else{
		console.log('NO es una cadena');
	}
}
	
function isBoolean(str){
	if ( typeof(str) === "boolean" ){
		console.log('SÍ es un booleano');
	}else{
		console.log('NO es un booleano');
	}
}

// function encodeWord(str){
// 	str = str.toUpperCase();
// 	do {
// 			str = str.replace('T','7');	
// 			str = str.replace('A','4');	
// 			str = str.replace('S','5');	
// 			str = str.replace('O','0');	
// 	}
// 	while (str.indexOf('TASO') == -1);
// 	console.log(str);
// 	return str;
// }

function encodeWord(str){
	str = str.toUpperCase();
	str = str.replace('T','7');	
	str = str.replace('A','4');	
	str = str.replace('S','5');	
	str = str.replace('O','0');	
	console.log(str);
	return str;
}

function encodeWordPlus(str){
	str = encodeWord(str);
	var strArray = str.split('');
	var max = 1001;
	var min = 0;
	var aleatorio;
	for (i = 7; i <= str.length; i+= 7){
		aleatorio = Math.floor((Math.random() * max) + min);
		strArray.splice(i, 0, String(aleatorio));
	}
	console.log('Array = ' + strArray);
	str = strArray.join('');
	console.log('String = ' + str);
}
