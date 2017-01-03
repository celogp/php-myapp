<?php
	require_once('Model.php');
	class ModelMenuUsuario extends Model{
		public function __construct() {
			parent::__construct('TMENUUSUARIO');
		}
		
		public function getQtdRows() {
			if (is_null($this->filtro)){
				$sql = "SELECT count(1) FROM vmenuusuario";
			}else {
				$sql = "SELECT count(1) FROM vmenuusuario where $this->filtro";
			}
			$stmt = $this->conn->prepare( $sql );
			$stmt->execute();
			$this->qtdRows = $stmt->fetchColumn();
		return $this->qtdRows; 
		}
		
		public function selectAllRows() {
			if (is_null($this->filtro)){
				$sql = "select mu.* from vmenuusuario mu LIMIT $this->start,  $this->limit";
			}else{
				$sql = "select mu.* from vmenuusuario mu where $this->filtro LIMIT $this->start,  $this->limit";
			}
			$stmt = $this->conn->prepare( $sql );
			$stmt->execute();
			$this->row = $stmt->fetchall();
		return $this->row; 
		}
		
		public function insertRow($record) {
			parent::insertRow($record);
		return( $record );
		}
		
		public function updateRow($record){
			parent::updateRow($record);
		return( $record );
		}
		
		public function deleteRow($record){
			parent::deleteRow($record);
		return( $record );
		}
		
		public function updateTotal($record){
			$sql = "update tmenuusuario set podeacessar = 'S', podeincluir = 'S', podeexcluir = 'S', podesalvar = 'S' where id_usuario = " . $record->id_usuario;
			$stmt = $this->conn->prepare( $sql );
			$stmt->execute();
		return( $record );
		}
		
	}
?>
