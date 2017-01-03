<?php
	require_once( '../helper/Transaction.php' );
	
	class Menu  {
		private $conn;
		private $Menu = array();

		public function __construct() {
			try
			{
				Transaction::open('ServerCfg');
				$this->conn = Transaction::getInstance();
				$this->Menu = $this->getMenuUsuario($_SESSION['id']);
				
			echo $this->Menu;
			
			}
			catch( Exception $e )
			{
				throw new Exception(  $e->getMessage() );
			}
		}
	
		public function getMenuUsuario($codusuario){
			$listaMenu = array();
			$tmp = array();
			/**/
			$sql = 'select tmr.titulo as mtitulo, tmr.iconCls as miconCls, i.menu_id, i.id, i.titulo as stitulo, i.iconCls as siconCls, i.mypanel, tmu.podeincluir, tmu.podeexcluir, tmu.podesalvar from tmenuitem i, tmenuusuario tmu, tmenuroot tmr where i.menu_id = tmr.id and i.id = tmu.submenu_id and tmu.id_usuario = ' . $codusuario . ' and tmu.podeacessar = "S" order by i.menu_id, i.id';
			$stmt = $this->conn->prepare( $sql );
			$stmt->execute();
			$root = $stmt->fetch(PDO::FETCH_OBJ);
			$i = 0;
			$j = 0;
			$menu_ant = $root->menu_id;
			$listaMenu[$i]['title'] = $root->mtitulo;
			$listaMenu[$i]['iconCls'] = $root->miconcls;
			$listaMenu[$i]['id'] = $root->menu_id;
			$listaMenu[$i]['leaf'] = 'true';
			$listaMenu[$i]['podeincluir'] = $root->podeincluir;
			$listaMenu[$i]['podeexcluir'] = $root->podeexcluir;
			$listaMenu[$i]['podesalvar'] = $root->podesalvar;
			do {
				if ($menu_ant != $root->menu_id) {
					$listaMenu[$i]['items'] = $tmp;
					unset($tmp);
					$i++;
					$listaMenu[$i]['title'] = $root->mtitulo;
					$listaMenu[$i]['iconCls'] = $root->miconcls;
					$listaMenu[$i]['id'] = $root->menu_id;
					$listaMenu[$i]['leaf'] = 'true';
					$listaMenu[$i]['podeincluir'] = $root->podeincluir;
					$listaMenu[$i]['podeexcluir'] = $root->podeexcluir;
					$listaMenu[$i]['podesalvar'] = $root->podesalvar;
					$menu_ant = $root->menu_id;
					$j = 0;
				}
				$tmp[$j]['text'] = $root->stitulo;
				$tmp[$j]['iconCls'] = $root->siconcls;
				$tmp[$j]['menu_id'] = $root->menu_id;
				$tmp[$j]['id'] = $root->id;
				$tmp[$j]['leaf'] = 'true';
				$tmp[$j]['podeincluir'] = $root->podeincluir;
				$tmp[$j]['podeexcluir'] = $root->podeexcluir;
				$tmp[$j]['podesalvar'] = $root->podesalvar;
				$tmp[$j]['mypanel'] = $root->mypanel;
				$j++;
			} while ($root = $stmt->fetch(PDO::FETCH_OBJ));
			$listaMenu[$i]['items'] = $tmp;
			unset($tmp);
			$items['items'] = $listaMenu;
			return ( json_encode($items) );
		}
	}
	new Menu();
?>