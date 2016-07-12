$(document).ready(Inicio());

function Inicio(){
	tablaMultiplicar();
	tablaMultiplicar2(6);
	multiplos();
	max(134,277);
	maxOfThree(2,18,10);
	isVowel('U');
	getRGB('#00FF00');
	sayHi("Juanma", showConsole);
	leo();
};

function tablaMultiplicar(){
	imprimir('.tablaMultiplicar', '<h3>Tabla de multiplicar</br>10 x 10</h3>');
	var result = '';
	for (var i = 1 ; i <= 10 ; i++){
		for (var q = 1 ; q <= 10 ; q++){
			result += (i * q) + ' ';
		}
	}
	imprimir('.tablaMultiplicar',result);
}

function tablaMultiplicar2(a){
	imprimir('.tablaMultiplicar2', '<h3>Tabla de multiplicar del ' + a + '</h3>');
	var result = '';
	for (var i = 0 ; i <= 10 ; i++){
			result += (i * a) + ' ';
	}
	imprimir('.tablaMultiplicar2',result);
}

function multiplos(){
	imprimir('.multiplos', '<h3>Múltiplos de 23 hasta 500</h3>');
	var num = 23;
	var limit = 500;
	var result = '';
	var suma = 0;
	for (var i = num; i <= limit; i++){
		if (i % num == 0) {
			result += i + ' ';
			suma += i;
		}
	}
	imprimir('.multiplos', result + '</br></br>');
	imprimir('.multiplos', 'SUMA = ' + suma);
}

function max(a,b){
	imprimir('.max', '<h3>Max of two</h3>');
	if (a > b){
		imprimir('.max', a + ' es mayor que ' + b);
	}
	else if (a < b) {
		imprimir('.max', b + ' es mayor que ' + a);
	} else {
		imprimir('.max', a + ' y ' + b + ' son iguales');
	}
}

function maxOfThree(a,b,c){
	imprimir('.maxOfThree', '<h3>Max of three</h3>');
	imprimir('.maxOfThree', 'El mayor de ' + a + ' - ' + b + ' - ' + c + ' es ')
	if (a > b && a > c){
		imprimir('.maxOfThree', a)
	} else if (b > a && b > c){
		imprimir('.maxOfThree', b)
	} else {
		imprimir('.maxOfThree', c)		
	}
}

function isVowel(char){
	imprimir('.isVowel', '<h3>¿\' ' + char + ' \' es una vocal?</h3>');
	if (char.length != 1){
		imprimir('.isVowel', 'Debe ser una sola letra');
	}else{
if (esVocal(char) > -1){
			imprimir('.isVowel', ' SÍ es una vocal');
		}else{
			imprimir('.isVowel', ' NO es una vocal');
		}
	}
	function esVocal(char){
		var vocales = 'aeiou';
		char = char.toLowerCase();
		return vocales.indexOf(char);
	}
}

function getRGB(Color){
	imprimir('.getRGB', '<h3>getRGB -> ' + Color + ' <h3>');
	var Black = '#000000';
	var White = '#FFFFFF';
	var Red = '#FF0000';
	var Green = '#00FF00';
	var Blue = '#0000FF';

	Color = Color.replace("#", "");
	Color = Color.toUpperCase();
	Color = Color.split('');
	
	var c1 = Color.slice(0,2);
	var c2 = Color.slice(2,4);
	var c3 = Color.slice(4,6);
	
	c1 = c1.join('');
	c2 = c2.join('');
	c3 = c3.join('');
	
	c1 = parseInt(c1,16);
	c2 = parseInt(c2,16);
	c3 = parseInt(c3,16);

	imprimir('.getRGB', 'rgb ( ' + c1 + ' , ' + c2 + ' , ' + c3 + ' )</br></br>');

	Color.unshift('#');
	Color = Color.join('');

	imprimir('.getRGB', Color + ' --- ');

	var colores = '';
	switch (Color) { 
		case Black:
			colores = 'Negro';
			break; 
	  	case White:
		  	colores = 'Blanco';
		   	break;
	  	case Red:
			colores = 'Rojo';
	  	   	break;
	  	case Green:
	  		colores = 'Verde';
	   		break;
	  	case Blue:
	  	  	colores = 'Azul';
	   	   	break;
	  	default:
	  		colores = 'No se reconoce el color';
	    break;
	}
	imprimir('.getRGB', colores);
}

// función que imprime los resultados en el DIV que recibe como clase
function imprimir(elemento, result){
	$(elemento).append(result);
}
