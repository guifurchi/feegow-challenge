<?php

namespace App\Controllers;

use MF\Controller\Action;
use MF\Model\Container;

class AppController extends Action{

    public function agenda(){

        $this->render('agenda','layout','');

    }

    public function solicitarAgenda(){
        
        $agenda = Container::getModel('agenda');
        $date = new \DateTime($_POST['birthdate']);

        $agenda->__set('specialty_id', $_POST['specialty_id']);
        $agenda->__set('profissional_id', $_POST['profissional_id']);
        $agenda->__set('name', $_POST['name']);
        $agenda->__set('source_id', $_POST['source_id']);
        $agenda->__set('birthdate', $date->format('Y-m-d'));
        $agenda->__set('cpf', $_POST['cpf']);

        if($_POST['name'] != '' && $_POST['source_id'] != ''  && $_POST['birthdate'] != '' && $_POST['cpf'] != ''){
            $agendas= $agenda->inserirAgenda();
            $this->view->agenda = $agendas;
            $this->render('solicitar_agenda','layout','');

        }else{
            $this->render('solicitar_agenda','layout','erro');
        }
            
    }
    //método utilizado para inserção do AJAX / se não utlizar o AJAX essa faixa de código pode ser desconsiderada
    public function confirma(){

        if($_POST['name'] != '' && $_POST['source_id'] != ''  && $_POST['birthdate'] != '' && $_POST['cpf'] != ''){
            $this->render('confirma','layout','');

        }else{
            $this->render('confirma','layout','erro');
        }
    }
}
?>