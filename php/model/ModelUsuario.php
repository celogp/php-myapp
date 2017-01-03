<?php
	require_once('Model.php');
	class ModelUsuario extends Model  {
		public function __construct() {
			parent::__construct('TUSUARIO');
		}
		
		public function getQtdRows() {
		return (parent::getQtdRows()); 
		}
		
		public function selectAllRows() {
		return (parent::selectAllRows()); 
		}

		public function insertRow($record) {
			parent::insertRow($record);
			$this->insertFullMenu($record->id);
		return( $record );
		}
		
		public function updateRow($record){
			parent::updateRow($record);
		return( $record );
		}
		
		public function deleteRow($record){
			parent::deleteRow($record);
			$this->deleteFullMenu($record->id);
		return( $record );
		}
		
		private function insertFullMenu($codusuario){
			$sql = 'insert into tmenuusuario (id_usuario, menu_id, submenu_id, temacesso) select ' .$codusuario . ', i.menu_id, i.id, "N" from tmenuitem i where not exists (select 1 from tmenuusuario m where m.id_usuario = ' .$codusuario. ')';
			$stmt = $this->conn->prepare( $sql );
			$stmt->execute();
		}
		
		private function deleteFullMenu($codusuario){
			$sql = 'delete from tmenuusuario where id_usuario =  ' .$codusuario;
			$stmt = $this->conn->prepare( $sql );
			$stmt->execute();
		}
	}
?>