function encima(id){
	document.getElementById(id).style.fill = "#F23341";
}

function fuera(id){
	document.getElementById(id).style.fill = "#33E533";
}

var AUTOMOVIL = document.getElementsByClassName("AUTOMOVIL");
var CARAVANA = document.getElementsByClassName("CARAVANA");
var MOTO = document.getElementsByClassName("MOTO");
var FURGONETA = document.getElementsByClassName("FURGONETA");
var SOMBRAPERMANENTE = document.getElementsByClassName("SOMBRAPERMANENTE");
var SOMBRATARDE = document.getElementsByClassName("SOMBRATARDE");
var ELECTRICIDAD = document.getElementsByClassName("ELECTRICIDAD");
var MAYORLONGITUD = document.getElementsByClassName("MAYORLONGITUD");

function mostrarCoches(){
	restablecer();
	deshabilitarParcialmente(CARAVANA, MOTO, FURGONETA);
}

function mostrarCaravanas(){
	restablecer();
	deshabilitarParcialmente(AUTOMOVIL, MOTO, FURGONETA);
}

function mostrarFurgonetas(){
	restablecer();
	deshabilitarParcialmente(AUTOMOVIL, CARAVANA, MOTO);
}

function mostrarMotos(){
	restablecer();
	deshabilitarParcialmente(AUTOMOVIL, CARAVANA, FURGONETA);
}

function sombraPermanente(){
	deshabilitarTodo();
	for (i = 0; i <= SOMBRAPERMANENTE.length - 1; i++){
		SOMBRAPERMANENTE[i].style.display = "block";
	}
}

function sombraTarde(){
	deshabilitarTodo();
	for (i = 0; i <= SOMBRATARDE.length - 1; i++){
		SOMBRATARDE[i].style.display = "block";
	}
}

function electricidad(){
	deshabilitarTodo();
	for (i = 0; i <= ELECTRICIDAD.length - 1; i++){
		ELECTRICIDAD[i].style.display = "block";
	}
}

function plazaslargas(){
	deshabilitarTodo();
	for (i = 0; i <= MAYORLONGITUD.length - 1; i++){
		MAYORLONGITUD[i].style.display = "block";
	}
}

function restablecer(){
	for (i = 0; i <= AUTOMOVIL.length - 1; i++){
		AUTOMOVIL[i].style.display = "block";
	}
	for (i = 0; i <= CARAVANA.length - 1; i++){
		CARAVANA[i].style.display = "block";
	}
	for (i = 0; i <= MOTO.length - 1; i++){
		MOTO[i].style.display = "block";
	}
	for (i = 0; i <= FURGONETA.length - 1; i++){
		FURGONETA[i].style.display = "block";
	}	
}

function deshabilitarParcialmente(tipoVehiculo1, tipoVehiculo2, tipoVehiculo3){
	for (i = 0; i <= tipoVehiculo1.length - 1; i++){
		tipoVehiculo1[i].style.display = "none";
	}
	for (i = 0; i <= tipoVehiculo2.length - 1; i++){
		tipoVehiculo2[i].style.display = "none";
	}
	for (i = 0; i <= tipoVehiculo3.length - 1; i++){
		tipoVehiculo3[i].style.display = "none";
	}
}

function deshabilitarTodo(){
	for (i = 0; i <= AUTOMOVIL.length - 1; i++){
		AUTOMOVIL[i].style.display = "none";
	}
	for (i = 0; i <= CARAVANA.length - 1; i++){
		CARAVANA[i].style.display = "none";
	}
	for (i = 0; i <= MOTO.length - 1; i++){
		MOTO[i].style.display = "none";
	}
	for (i = 0; i <= FURGONETA.length - 1; i++){
		FURGONETA[i].style.display = "none";
	}
}