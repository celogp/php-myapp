<?php
	require_once('Model.php');
	class ModelProduto extends Model  {
		public function __construct() {
			parent::__construct('PRODUTO');
		}
		
		public function getQtdRows() {
		return (parent::getQtdRows()); 
		}
		
		public function selectAllRows() {
		return (parent::selectAllRows()); 
		}
		
		public function insertRow($record) {
		return( parent::insertRow($record)) ;
		}
		
		public function updateRow($record){
		return( parent::updateRow($record));
		}
		
		public function deleteRow($record){
		return( parent::deleteRow($record));
		}		
	}
?>