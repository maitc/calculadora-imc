var espacioDonde = document.getElementById('espacio');
var res = document.getElementById('respuesta');

function calcular(){
	var peso = document.getElementById('peso').value;	
	var altura = document.getElementById('altura').value;

	return alert(peso/(Math.pow(altura, 2)));
}

