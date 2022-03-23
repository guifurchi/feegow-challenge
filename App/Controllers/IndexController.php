<?php

namespace App\Controllers;

use MF\Controller\Action;
use MF\Model\Container;

class IndexController extends Action{

    public function index(){// 'action' => 'index'

        $especialidade = Container::getModel('especialidade');
        $especialidades= $especialidade->getEspecialidade();
        $this->view->especialidades = $especialidades;

        $profissional = Container::getModel('profissionais');
        $profissionais= $profissional->getProfissionais();
        $this->view->profissionais = $profissionais;

        $total = Container::getModel('profissionais');
        $totais= $total->totalprof();
        $this->view->totais = $totais;

        $this->render('index','layout','');
    }

}

?>