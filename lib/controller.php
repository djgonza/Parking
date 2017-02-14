<?php

class Controller {
    
    const DIR_SECTIONS = "client/secciones/"; 
    const FILE_HEAD = "client/secciones/head.html";
    const FILE_FOOTER = "client/secciones/footer.html";
    const DIR_ERROR404 = "client/secciones/404.html";
    private $router;

    public function Controller(){

        // Peticion Default
        if (empty($_GET)) {
            $this -> getClientApp();
            return;
        }
        // Peticion lista secciones
        if (isset($_GET["getListSections"])) {
            $this -> getListSections();
            return;
        }
        // Peticion html seccion
        if (isset($_GET["getSection"])) {
            $this -> getSection($_GET["getSection"]);
            return;
        }
        // Peticion lista plazas libres
        if (isset($_GET["getAvailableSquares"])) {
            $this -> getAvailableSquares($_GET["getAvailableSquares"]["ini"], $_GET["getAvailableSquares"]["end"]);
            return;
        }

        if (isset($_POST["pagar"])){
            $this -> pay();
            return;
        }

    }

    // Devuelve la lista de secciones disponibles
    private function getListSections () {

        $dir = opendir(self::DIR_SECTIONS);
        $list = array();
        while ($archive = readdir($dir)) {

            $name = explode(".", $archive);
            if($name[0] != "") {
                $list[] = $name[0];
            }

        }

        echo json_encode($list);

    }

    // Devuelve el html de la seccion o 404
    private function getSection ($sectionName) {

        if (file_exists(self::DIR_SECTIONS.$sectionName.".html")) {
            include self::DIR_SECTIONS.$sectionName.".html";
        }else{
            include self::DIR_ERROR404;
        }

    }

    // Devuelve el css y js necesario
    private function getClientApp() {

        include self::FILE_HEAD;
        include self::FILE_FOOTER;

    }


    // Envia las plazas libres
    private function getAvailableSquares($dateIni, $dateFin) {

        require_once "lib/ConnectDB.php";
        
        $db = new ConnectDB();

        echo json_encode($db->listAvailableSquares($dateIni, $dateFin));

        $db -> desconnection();

    }

    private function pay () {

        //var_dump($_POST["data"]);

        require_once "lib/ConnectDB.php";
        
        $db = new ConnectDB();

        $db->insertNew($_POST["data"]);

        $db->desconnection();

        $mensaje = "Mensaje <a href='http://parking.net'>Link</a>";

        //Enviar email con los datos
        mail ($_POST[5], "Realizar pago Parking Maria Ana Sanz", $mensaje);
        

    }


}

?>