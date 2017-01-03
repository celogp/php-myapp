<?php
	require_once( '../helper/Transaction.php' );
	
	class Autenticacao  {
		private $loginSenha;
		private $loginUsuario;
		private $conn;

		public function __construct() {
			try
			{
				$_SESSION['id'] = 0;
				$_SESSION['loginUsuario'] = '';
				$_SESSION['Autenticado']  = false;
				Transaction::open('ServerCfg');
				$this->conn = Transaction::getInstance();
				
				if (isset($_REQUEST['loginSenha'])) {
					$this->loginSenha   = $_REQUEST['loginSenha'];
					$this->loginUsuario = $_REQUEST['loginUsuario'];
				}
				
				if(method_exists($this, $_REQUEST['action'])) {
					call_user_func(array($this, $_REQUEST['action']));
				}
				
			}
			catch( Exception $e )
			{
				throw new Exception(  $e->getMessage() );
			}
		}
	
	
		public function login() {
			$sql = "SELECT MAX(ID) FROM TUSUARIO TUSUA WHERE TUSUA.LOGIN = '$this->loginUsuario' AND TUSUA.SENHA = '$this->loginSenha'";
			$stmt = $this->conn->prepare( $sql );
			$stmt->execute();
			$idUsuario = $stmt->fetchColumn();
			$success = (($idUsuario==0) ? false : true);
			$msg = (($idUsuario==0) ? "Login não autenticado !.": "Login autenticado !.");
			
			$_SESSION['id'] = $idUsuario;
			$_SESSION['loginUsuario'] = $this->loginUsuario;
			$_SESSION['Autenticado']  = $success;
			
			echo json_encode(array(
				"rows" => $idUsuario,
				"success" => $success,
				"msg" => $msg, 
				"idusuario" => $idUsuario,
				"nomeusuario" => $this->loginUsuario,
			));
		}

		public function autenticado() {
			echo json_encode(array(
				"rows" => 1,
				"success" => true,
				"msg" => $_SESSION['loginUsuario']
			));
		}

	}
	new Autenticacao();
?>