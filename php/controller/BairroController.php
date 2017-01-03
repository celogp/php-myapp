<?php
	require_once('../model/ModelBairro.php');
	require_once('Controller.php');
	class BairroController extends Controller  {
		public function __construct() {
			parent::__construct( new ModelBairro() );
		}
	}
	new BairroController();
?>