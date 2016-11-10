<?php 

	procesarUrl ();

	//incluimos el head
	include "client/sections/head.html";

	//incluimos la cabecera
	include "client/sections/cabecera.html";

	//incluimos las secciones
	include "client/sections/inicio.html";
	include "client/sections/tarifas.html";
	include "client/sections/reserva.html";
	include "client/sections/pf.html";
	include "client/sections/servicios.html";
	include "client/sections/ubicacion.html";
	include "client/sections/404.html";

	//incluimos el pie
	include "client/sections/footer.html";

?>