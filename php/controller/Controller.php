<?php
	class Controller  {
		//variaveis utilizadas nas classes herdadas quando precisar sobrescrever algum metodo ou criar um adicional.
		protected $objModel;
		protected $record;
		
		public function __construct($objModel) {
			$this->objModel = $objModel;
			
			if (isset($_REQUEST['rows'])) {
				$this->record = json_decode($_REQUEST['rows']);
			}
			
			if (isset($_REQUEST['start'])) {
				$this->objModel->setStart($_REQUEST['start']);
				$this->objModel->setLimit($_REQUEST['limit']);
				$this->objModel->setPagin($_REQUEST['page']);
			}
			//Filtros
			if (isset($_REQUEST['filter'])) {
				$this->objModel->parseFiltro(json_decode($_REQUEST['filter']));
			}
			
			if(method_exists($this, $_REQUEST['action'])) {
				call_user_func(array($this, $_REQUEST['action']));
			}
		}
		
		public function read(){
			$success = true;
			$qtdRows = $this->objModel->getQtdRows();
			$records = $this->objModel->selectAllRows();
			echo json_encode(array(
				"rows" => $records,
				"success" => $success, 
				"qtdRows" => $qtdRows
			));
		}
		
		public function add(){
			$record = $this->record;
			$msg = 'Inclusão feita com sucesso !';
			$success = true;
			if ($this->objModel->getPodeIncluir() == 'S') {
				try {
					$this->objModel->setStartTransaction();
					$record = $this->objModel->insertRow($record);
					$this->objModel->setCommitTransaction();
				}catch( Exception $e )
				{
					$this->objModel->setRollBackTransaction();
					$success = false;
					$msg = $e->getMessage();
				}
			}else{
				$msg = 'Você NÃO tem permissão para faze a inclusão !';
				$success = false;
			}
			echo json_encode(array(
				"rows" => $record,
				"success" => $success,
				"msg" => $msg
			));
		}		
		
		public function save(){
			$record = $this->record;
			$msg = 'Alteração feita com sucesso !';
			$success = true;
			if ($this->objModel->getPodeSalvar() == 'S') {
				try {
					$this->objModel->setStartTransaction();
					$record = $this->objModel->updateRow($record);
					$this->objModel->setCommitTransaction();
				}catch( Exception $e )
				{
					$this->objModel->setRollBackTransaction();
					$success = false;
					$msg = $e->getMessage();
				}
			}else{
				$msg = 'Você NÃO tem permissão para faze a alteração !';
				$success = false;
			}
			echo json_encode(array(
				"rows" => $record,
				"success" => $success,
				"msg" => $msg
			));
		}
		
		public function destroy(){
			$record = $this->record;
			$msg = 'Exclusão feita com sucesso !';
			$success = true;
			if ($this->objModel->PodeExcluir() == 'S') {
				try {
					$this->objModel->setStartTransaction();
					$record = $this->objModel->deleteRow($record);
					$this->objModel->setCommitTransaction();
				}catch( Exception $e )
				{
					$this->objModel->setRollBackTransaction();
					$success = false;
					$msg = $e->getMessage();
				}
			}else{
				$msg = 'Você NÃO tem permissão para faze a exclusão !';
				$success = false;
			}
			echo json_encode(array(
				"rows" => $record,
				"success" => $success,
				"msg" => $msg
			));
		}		
	}
?>