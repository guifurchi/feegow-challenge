<?php

namespace App\Models;

use App\Controllers;
use MF\Model\Model;

use function PHPSTORM_META\type;

class Profissionais extends Model{

    public function getProfissionais(){

        if(isset($_GET['specialty_id'])){

            $query = "select *, tb_profissional.id as profId from tb_profissional  left join tb_especialidade on tb_profissional.specialty_id=tb_especialidade.id where specialty_id = :id ";
            $stmt = $this->db->prepare($query);
            $stmt->bindValue(':id', $_GET['specialty_id']);
            $stmt->execute();
    
            return $stmt->fetchall(\PDO::FETCH_ASSOC);
                
        }elseif(isset($_GET['specialty_id']) == 0){
                $query = "select *, tb_profissional.id as profId from tb_profissional  left join tb_especialidade on tb_profissional.specialty_id=tb_especialidade.id where specialty_id = ''";
                $stmt = $this->db->prepare($query);
                $stmt->execute();
        
                return $stmt->fetchall(\PDO::FETCH_ASSOC);
            }
    }

    public function totalprof(){
        $query = "select count(*) as total, descricao from tb_profissional  left join tb_especialidade on tb_profissional.specialty_id=tb_especialidade.id where specialty_id = :id ";
        $stmt = $this->db->prepare($query);
        @$stmt->bindValue(':id', $_GET['specialty_id']);
        $stmt->execute();

        return $stmt->fetch(\PDO::FETCH_ASSOC);

    }

    public function SelectProf(){

        $query = "select * from tb_profissional  left join tb_especialidade on tb_profissional.specialty_id=tb_especialidade.id where tb_profissional.id= :id ";
        $stmt = $this->db->prepare($query);
        $stmt->bindValue(':id', $_GET['professional_id']);
        $stmt->execute();

        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }
 
     
    
}

?>