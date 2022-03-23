<?php

namespace App\Controllers;

use MF\Controller\Action;
use MF\Model\Container;

class AppController extends Action{

    public function agenda(){

        $profissional = Container::getModel('profissionais');
        $profissionais= $profissional->SelectProf();
        $this->view->prof = $profissionais;

        $this->render('agenda','layout','');

    }
    public function solicitarAgenda(){
        
        $agenda = Container::getModel('agenda');

        $agenda->__set('specialty_id', $_GET['specialty_id']);
        $agenda->__set('professional_id', $_GET['professional_id']);
        $agenda->__set('name', $_POST['name']);
        $agenda->__set('source_id', $_POST['como']);
        $agenda->__set('birthdate', $_POST['birthdate']);
        $agenda->__set('cpf', $_POST['cpf']);

        if($_POST['name'] != '' && $_POST['como'] != ''  && $_POST['birthdate'] != '' && $_POST['cpf'] != ''){
            $agendas= $agenda->inseirAgenda();
            $this->view->agenda = $agendas;
            $this->render('solicitar_agenda','layout','');

        }else{
            $this->render('solicitar_agenda','layout','erro');
        }
    }
}
?>