function calculo_imc(pesoimc, alturaimc) {
	var alturaimc = document.getElementById("altura").value;
	var pesoimc = document.getElementById("peso").value;

	var alturaimcNum = parseFloat(alturaimc);
	var pesoimcNum = parseFloat(pesoimc);
	
	return alert("Tu IMC es de " + (pesoimcNum/Math.pow(alturaimcNum,2)).toFixed(2));
	
}





