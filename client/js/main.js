$(function () {

	/* 
		iniciamos el enrutador
	*/
	var enrutador = new Enrutador ();
	var eventos = new Eventos (enrutador);

	$.ajax({
    // la URL para la petición
    url : '',
 
    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    data : { id : 123 },
 
    // especifica si será una petición POST o GET
    type : 'GET',
 
    // el tipo de información que se espera de respuesta
    dataType : 'json',
 
    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success : function(json) {
        alert("success!!");
    },
 
    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error : function(xhr, status) {
        alert("error!!");
    },
 
    // código a ejecutar sin importar si la petición falló o no
    complete : function(xhr, status) {
        alert("complete!!");
    }
});


});