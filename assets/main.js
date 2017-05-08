//IMC = Peso (kg) / altura (m) 2


function calculo_imc(peso, altura) {
	var altura = document.imc.altura.value;
	var peso = document.imc.peso.value;

	var alturaAlCuadrado = Math.pow(altura,2);
	alert(peso/alturaAlCuadrado);
	
}


