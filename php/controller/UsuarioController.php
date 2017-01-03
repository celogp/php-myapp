<?php
	require_once('../model/ModelUsuario.php');
	require_once('Controller.php');
	class UsuarioController extends Controller  {
		public function __construct() {
			parent::__construct( new ModelUsuario() );
		}
	}
	new UsuarioController();
?>