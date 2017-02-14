<?php

class ConnectDB {

	const DB_SERVER = "176.12.82.64";
	const DB_USER = "parkingweb";
	const DB_PASSWD = "WebParking2016*--";
	const DB_NAME = "parkingweb";

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

		$sql = "call añadirTodo (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

		$judgment = $this->connection->prepare($sql);

		var_dump($judgment->execute($data));

	}

}


?>