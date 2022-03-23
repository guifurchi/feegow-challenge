<?php

namespace App\Models;

use App\Controllers;
use MF\Model\Model;

class Agenda extends Model{


    public function __get($attr){
        return $this->$attr;
    }

    public function __set($attr, $value){
        $this->$attr = $value;
    }

    public function inseirAgenda(){
        
            $query = "INSERT INTO tb_agenda (specialty_id, professional_id, name, cpf, source_id, birthdate) VALUE (:specialty_id, :professional_id, :name, :cpf, :source_id, :birthdate)";
            $stmt = $this->db->prepare($query);
            
            $stmt->bindValue('specialty_id', $this->__get('specialty_id'));
            $stmt->bindValue('professional_id', $this->__get('professional_id'));
            $stmt->bindValue('name', $this->__get('name'));
            $stmt->bindValue('cpf', $this->__get('cpf'));
            $stmt->bindValue('source_id', $this->__get('source_id'));
            $stmt->bindValue('birthdate', $this->__get('birthdate'));
            $stmt->execute();
            
    }

}

?>