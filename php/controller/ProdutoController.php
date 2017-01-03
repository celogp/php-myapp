<?php
	require_once('../model/ModelProduto.php');
	require_once('Controller.php');
	
	class ProdutoController extends Controller  {
		public function __construct() {
			parent::__construct( new ModelProduto() );
		}
	}
	new ProdutoController();
?>