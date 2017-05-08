function calculadora(){

	var pe = document.getElementById("peso").value;
	var est = document.getElementById("estatura").value;

	var res = pe / (Math.pow(est, 2));
	var resultado = res.toFixed(2);
	alert("Tu IMC es de " + resultado);

}

calculadora();