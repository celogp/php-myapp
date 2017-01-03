<?php
	require_once('../model/ModelMenuUsuario.php');
	require_once('Controller.php');
	class MenuUsuarioController extends Controller  {
		public function __construct() {
			parent::__construct( new ModelMenuUsuario() );
		}
		
		public function acessoTotal(){
			$record = $this->record;
			$msg = 'Acesso total realizado com sucesso !';
			$success = true;
			try {
				$this->objModel->setStartTransaction();
				$record = $this->objModel->updateTotal($record);
				$this->objModel->setCommitTransaction();
			}catch( Exception $e )
			{
				$this->objModel->setRollBackTransaction();
				$success = false;
				$msg = $e->getMessage();
			}
			echo json_encode(array(
				"rows" => $record,
				"success" => $success,
				"msg" => $msg
			));
		}		
	}
	
	new MenuUsuarioController();
?>