function encima(id) {
	document.getElementById(id).style.fill = "#F23341";
}

function fuera(id) {
	document.getElementById(id).style.fill = "#33E533";
}

var textoCoches = "ta";
var textoCaravanas = "tc";
var textoMotos = "tm0";
var textoFurgonetas = "tf";

var plazaCoches = "a";
var plazaCaravanas = "c";
var plazaMotos = "m0";
var plazaFurgonetas = "f";

var bordeCoches = "ba";
var bordeCaravanas = "bc";
var bordeMotos = "bm0";
var bordeFurgonetas = "bf";

function mostrarCoches(){
	restablecer();
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "none";
	}

	//CARAVANAS
	for(i = 1; i <= 62; i++){
		if(i < 10){
			var texto = textoCaravanas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCaravanas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + i;
			document.getElementById(borde).style.display = "none";
		}
	}	

	//FURGONETAS
	for(i = 1; i <= 33; i++){
		if(i < 10){
			var texto = textoFurgonetas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoFurgonetas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + i;
			document.getElementById(borde).style.display = "none";
		}
	}	
}

function mostrarCaravanas(){
	restablecer();
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "none";
	}

	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	//FURGONETAS
	for(i = 1; i <= 33; i++){
		if(i < 10){
			var texto = textoFurgonetas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoFurgonetas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + i;
			document.getElementById(borde).style.display = "none";
		}
	}
}

function mostrarFurgonetas(){
	restablecer();
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "none";
	}

	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	//CARAVANAS
	for(i = 1; i <= 62; i++){
		if(i < 10){
			var texto = textoCaravanas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCaravanas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + i;
			document.getElementById(borde).style.display = "none";
		}
	}
}

function mostrarMotos(){
	restablecer();
	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	//CARAVANAS
	for(i = 1; i <= 62; i++){
		if(i < 10){
			var texto = textoCaravanas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCaravanas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + i;
			document.getElementById(borde).style.display = "none";
		}		
	}	

	//FURGONETAS
	for(i = 1; i <= 33; i++){
		if(i < 10){
			var texto = textoFurgonetas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoFurgonetas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + i;
			document.getElementById(borde).style.display = "none";
		}
	}
}

function sombraPermanente(){
	restablecer();
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "none";
	}

	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	//FURGONETAS
	for(i = 15; i <= 33; i++){
		var texto = textoFurgonetas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaFurgonetas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeFurgonetas + i;
		document.getElementById(borde).style.display = "none";
	}

	document.getElementById("tf08").style.display = "none";
	document.getElementById("f08").style.display = "none";
	document.getElementById("bf08").style.display = "none";
	document.getElementById("tf09").style.display = "none";
	document.getElementById("f09").style.display = "none";
	document.getElementById("bf09").style.display = "none";
	document.getElementById("tf13").style.display = "none";
	document.getElementById("f13").style.display = "none";
	document.getElementById("bf13").style.display = "none";

	//CARAVANAS
	for(i = 1; i <= 24; i++){
		if(i < 10){
			var texto = textoCaravanas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCaravanas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	for(i = 31; i <= 44; i++){
		var texto = textoCaravanas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + i;
		document.getElementById(borde).style.display = "none";
	}

	for(i = 52; i <= 61; i++){
		var texto = textoCaravanas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + i;
		document.getElementById(borde).style.display = "none";
	}
}

function sombraTarde(){
	restablecer();
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "none";
	}

	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	//CARAVANAS
	for(i = 11; i <= 62; i++){
		var texto = textoCaravanas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + i;
		document.getElementById(borde).style.display = "none";
	}	

	//FURGONETAS
	for(i = 1; i <= 33; i++){
		if(i < 10){
			var texto = textoFurgonetas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoFurgonetas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + i;
			document.getElementById(borde).style.display = "none";
		}
	}
}

function electricidad(){
	restablecer();
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "none";
	}

	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	//CARAVANAS
	for(i = 1; i <= 31; i++){
		if(i < 10){
			var texto = textoCaravanas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCaravanas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCaravanas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCaravanas + i;
			document.getElementById(borde).style.display = "none";
		}
	}

	for(i = 43; i <= 62; i++){
		var texto = textoCaravanas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + i;
		document.getElementById(borde).style.display = "none";
	}

	//FURGONETAS
	for(i = 1; i <= 33; i++){
		if(i < 10){
			var texto = textoFurgonetas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoFurgonetas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + i;
			document.getElementById(borde).style.display = "none";
		}
	}
}

function plazaslargas(){
	restablecer();
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "none";
	}

	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "none";
		}	
	}

	//CARAVANAS
	for(i = 1; i <= 6; i++){
		var texto = textoCaravanas + 0 + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + 0 + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + 0 + i;
		document.getElementById(borde).style.display = "none";
	}

	document.getElementById("tc09").style.display = "none";
	document.getElementById("c09").style.display = "none";
	document.getElementById("bc09").style.display = "none";

	for(i = 10; i <= 11; i++){
		var texto = textoCaravanas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + i;
		document.getElementById(borde).style.display = "none";
	}

	document.getElementById("tc16").style.display = "none";
	document.getElementById("c16").style.display = "none";
	document.getElementById("bc16").style.display = "none";
	document.getElementById("tc18").style.display = "none";
	document.getElementById("c18").style.display = "none";
	document.getElementById("bc18").style.display = "none";

	for(i = 28; i <= 31; i++){
		var texto = textoCaravanas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + i;
		document.getElementById(borde).style.display = "none";
	}

	for(i = 35; i <= 62; i++){
		var texto = textoCaravanas + i;
		document.getElementById(texto).style.display = "none";
		var plaza = plazaCaravanas + i;
		document.getElementById(plaza).style.display = "none";
		var borde = bordeCaravanas + i;
		document.getElementById(borde).style.display = "none";
	}

	//FURGONETAS
	for(i = 1; i <= 33; i++){
		if(i < 10){
			var texto = textoFurgonetas + 0 + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + 0 + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + 0 + i;
			document.getElementById(borde).style.display = "none";
		}
		else{
			var texto = textoFurgonetas + i;
			document.getElementById(texto).style.display = "none";
			var plaza = plazaFurgonetas + i;
			document.getElementById(plaza).style.display = "none";
			var borde = bordeFurgonetas + i;
			document.getElementById(borde).style.display = "none";
		}
	}
}

function restablecer(){
	//MOTOS
	for(i = 1; i <= 4; i++){
		var texto = textoMotos + i;
		document.getElementById(texto).style.display = "block";
		var plaza = plazaMotos + i;
		document.getElementById(plaza).style.display = "block";
		var borde = bordeMotos + i;
		document.getElementById(borde).style.display = "block";
	}

	//COCHES
	for(i = 1; i <= 15; i++){
		if(i < 10){
			var texto = textoCoches + 0 + i;
			document.getElementById(texto).style.display = "block";
			var plaza = plazaCoches + 0 + i;
			document.getElementById(plaza).style.display = "block";
			var borde = bordeCoches + 0 + i;
			document.getElementById(borde).style.display = "block";
		}
		else{
			var texto = textoCoches + i;
			document.getElementById(texto).style.display = "block";
			var plaza = plazaCoches + i;
			document.getElementById(plaza).style.display = "block";
			var borde = bordeCoches + i;
			document.getElementById(borde).style.display = "block";
		}
	}

	//CARAVANAS
	for(i = 1; i <= 62; i++){
		if(i < 10){
			var texto = textoCaravanas + 0 + i;
			document.getElementById(texto).style.display = "block";
			var plaza = plazaCaravanas + 0 + i;
			document.getElementById(plaza).style.display = "block";
			var borde = bordeCaravanas + 0 + i;
			document.getElementById(borde).style.display = "block";
		}
		else{
			var texto = textoCaravanas + i;
			document.getElementById(texto).style.display = "block";
			var plaza = plazaCaravanas + i;
			document.getElementById(plaza).style.display = "block";
			var borde = bordeCaravanas + i;
			document.getElementById(borde).style.display = "block";
		}
	}	

	//FURGONETAS
	for(i = 1; i <= 33; i++){
		if(i < 10){
			var texto = textoFurgonetas + 0 + i;
			document.getElementById(texto).style.display = "block";
			var plaza = plazaFurgonetas + 0 + i;
			document.getElementById(plaza).style.display = "block";
			var borde = bordeFurgonetas + 0 + i;
			document.getElementById(borde).style.display = "block";
		}
		else{
			var texto = textoFurgonetas + i;
			document.getElementById(texto).style.display = "block";
			var plaza = plazaFurgonetas + i;
			document.getElementById(plaza).style.display = "block";
			var borde = bordeFurgonetas + i;
			document.getElementById(borde).style.display = "block";
		}
	}
}