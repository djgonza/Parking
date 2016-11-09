<?php

	function procesarUrl () {
		//procesar url
		$url = explode('/', $_SERVER['REQUEST_URI']);
		$url = array_values(array_filter($url));
		return ($url);
	}

?>