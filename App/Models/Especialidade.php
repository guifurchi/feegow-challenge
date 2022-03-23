<?php

namespace App\Models;

use App\Controllers;
use MF\Model\Model;

class Especialidade extends Model{

    public function getEspecialidade(){

            $query = "select * from tb_especialidade";
            $stmt = $this->db->prepare($query);
            $stmt->execute();
    
            return $stmt->fetchall(\PDO::FETCH_ASSOC);
    }
}
?>