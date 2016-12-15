<?php

class Controller {
    
    const DIR_SECTIONS = "client/secciones/"; 
    const FILE_HEAD = "client/secciones/head.html";
    const FILE_FOOTER = "client/secciones/footer.html";
    const DIR_ERROR404 = "client/secciones/404.html";


    public function Controller(){

        /*
            Peticiones Ajax
        */
        /*if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

        }*/

        // Peticion Default
        if (empty($_GET)) {
            $this -> getClientApp();
            //break;
        }
        // Peticion lista secciones
        if (isset($_GET["getListSections"])) {
            $this -> getListSections();
            //break;
        }
        // Peticion html seccion
        if (isset($_GET["getSection"])) {
            $this -> getSection($_GET["getSection"]);
            //break;
        }
        // Peticion lista plazas libres
        if (isset($_GET["getFreePlaces"])) {
            $this -> getFreePlaces();
            //break;
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
    private function getFreePlaces($horaIni, $horaFin) {

        echo "Reciviendo";

    }


}

?>