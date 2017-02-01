<?php

class ConnectDB {

	const DB_SERVER = "176.12.82.64";
	const DB_USER = "parkingdesk";
	const DB_PASSWD = "DeskParking2016*--";
	const DB_NAME = "parking_desk";

	private $connection;

	function ConnectDB() {

		try {
			$dsn = 'mysql:host='. self::DB_SERVER.';dbname='.self::DB_NAME;
			$this->connection = new PDO($dsn, self::DB_USER, self::DB_PASSWD);
			$this->connection->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
			$this->connection->exec('SET names utf8');
		} catch (Exception $ex) {
			$error = "Error: no se pudo conectar a la base de datos.";
			//echo $error;
			exit();
		}
	}

	function desconnection() {
		$this->connection = null;
	}

	function listAvailableSquares ($dateIni, $dateEnd) {

		$sql = "call todasLasPlazasDisponibles (\"$dateIni\", \"$dateEnd\")";

		$judgment = $this->connection->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

		$judgment->execute();

		$result = $judgment->fetchAll();

		return $result;

	}

	function insertNew ($data) {

		/*DROP PROCEDURE IF EXISTS `añadirTodo`$$
CREATE DEFINER=`parkingdesk`@`localhost` PROCEDURE `añadirTodo`(in vDNI varchar(16), in vNombre varchar(40), in vApell1 varchar(40), in vApell2 varchar(40), 
in vtelf varchar(16), in vemail varchar(40), in vAdelant decimal(5,2), in vComent varchar(200), in vMatricula varchar(8), 
in vLlegada timestamp, in vSalida timestamp, in vCodPlaza varchar(3), in vAdultos int, in vMenores int, in vTipoPago varchar(20))
BEGIN*/

		$sql = 	"call añadirTodo (".
				"$data[0],".
				"$data[1],".
				"$data[2],".
				"$data[3],".
				"$data[4],".
				"$data[5],".
				"$data[6],".
				"$data[7],".
				"$data[8],".
				"$data[9],".
				"$data[10],".
				"$data[11],".
				"$data[12],".
				"$data[13],".
				"$data[14],".
		")";

		$judgment = $this->connection->prepare($sql);

		$judgment->execute();

	}

}


?>