Ext.define('Myapp.controller.Login', {
	extend: 'Ext.ux.app.Mycontroller',
	
	models: ['MenuRoot','MenuItem'],
	
    stores: ['Menu'],

    views : ['Login','Menu','MenuItem'], 
	
	init : function () {
		//console.log ('init do login');
		
		this.control({
		  'Login button[action=login]': {
			click: this.Login
		  }
		});
	},
	
	Login : function (button) {
		var form = Ext.getCmp('pnlLogin').getForm(),
		    btnl = button.up('window'),
			menuPanel = Ext.ComponentQuery.query('mainmenu')[0],
			tabcentral = Ext.ComponentQuery.query('tabpanel')[0],
			txtusuario = Ext.ComponentQuery.query('footer #txtusuario')[0];
		
		menuPanel.removeAll();
		
		tabcentral.items.each(function(c){
			if (c.xtype != 'home') {
				tabcentral.remove(c);
			}
		});

		if(form.isValid()){
			form.submit({
				waitMsg:'Enviando dados...'
				,url : 'php/helper/Autenticacao.php'          //Simula OK
				,method : 'POST'
				,params:{action:'login'}
				,scope:this
				,success:function(form,action){

					this.getMenuStore().load(
						
						function(records, op, success){
						
							Ext.each(records, function(root){

								var menu = Ext.create('Myapp.view.MenuItem',{
									title: root.get('title'),
									iconCls: root.get('iconCls')
								});

								Ext.each(root.items(), function(itens){

									Ext.each(itens.data.items, function(item){
										
										menu.getRootNode().appendChild({
											text: item.get('text'), 
											leaf: item.get('leaf'),
											iconCls: item.get('iconCls'),
											id: item.get('id'),
											mypanel: item.get('mypanel'), 
											podeincluir : item.get('podeincluir'),
											podeexcluir : item.get('podeexcluir'),
											podesalvar : item.get('podesalvar')
										});
									});  
								});

								menuPanel.add(menu);
							}); 
						}
					
					);
						
					btnl.close();
					obj = Ext.decode(action.response.responseText);
					Ext.ux.Alert.show('Atenção !', obj.nomeusuario + ' você está logado no sistema !', 'warning');
					//Ext.ux.Alert.show('Atenção !', obj.msg, 'warning');
					//testando variavel global
					ServerVariaveis.idusuario = obj.idusuario;
					ServerVariaveis.nomeusuario = obj.nomeusuario;
					txtusuario.setText(obj.nomeusuario);
					
				}
				,failure:function(form,action){
					obj = Ext.decode(action.response.responseText);
					if(action.failureType == 'server'){ 
						Ext.ux.Alert.show('Atenção !', obj.msg, 'warning');
					}else{ 
						Ext.ux.Alert.show('Atenção !', 'Autenticação no servidor está inacessível : ' + obj.msg, 'error');
					} 
					form.reset();
				}									
			})
		}
	}	
});

