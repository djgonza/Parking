<?php 

class DB extends mysqli {

	/*const DB_HOST = "local.masanz.es/phpmyadmin"; 
	const DB_USER = "parkingweb";
	const DB_PASS = "WebParking2016*--";
	const DB_NAME = "parking_web";*/

	const DB_HOST = "localhost"; 
	const DB_USER = "parkingweb";
	const DB_PASS = "WebParking2016*--";
	const DB_NAME = "parking_web";


	public function DB () {


		parent::__construct(self::DB_HOST, self::DB_USER, self::DB_PASS, self::DB_NAME);

		
		if (mysqli_connect_error()) {
			echo "Error al conectar";
            die ('Error de Conexión ('.mysqli_connect_errno().') '.mysqli_connect_error());
        }


        //$this->select();



	}

	public function select () {

		$sql = "SELECT * FROM `plazas` LIMIT 0, 30";
		
		/*
			Ejecuta la sentencia sql
		*/
		if($result = $this->query($sql)){

			$row = $result->fetch_row();
	        var_dump($row);

		}else{

			echo "Error: ".mysqli_connect_errno();

		}

	}

}

?>