Ext.define('Myapp.controller.Menuusuario', {
	 extend: 'Ext.ux.app.Mycontroller'
	,mypanel: 'Menuusuario'
    ,models: ['Menuusuario']
    ,stores: ['Menuusuario', 'Boolean']
    ,views : [
    	'menuusuario.Mypanel',
    	'menuusuario.Mygrid',
    	'menuusuario.Myform', 
		'shared.Comboboolean'
    ]
	
	,init: function() {
		var me = this,
			listenersMUsu = {},
			btnAcessoTotal = me.mygrid + ' button[action=AcessoTotal]';
		/* evento dos botões do filho*/
		listenersMUsu[btnAcessoTotal] = {
			click: me.onAcessoTotal
		};
		listenersMUsu[me.mypanel + 'mypanel'] = {
			render: me.onRegisterEvents
		};
		me.listenersMUsu = Ext.Object.merge(listenersMUsu, me.listenersMUsu);
		me.control(me.listenersMUsu);
		
        me.callParent(arguments);
	}
		
	,onAcessoTotal: function (btn) {
		var me = this,
			record = me.getMygrid().getSelectionModel().getSelection()[0],
			store = me.getMygrid().getStore(),
			data = record.getData();
			Ext.Msg.confirm('Confirmação', 'Realmente deseja dar acesso em todas as opções para o registro selecionado ?', function(btnOk){
				if (btnOk === 'yes') {
					btn.disable();
					Ext.Ajax.request({
						url: 'php/controller/MenuUsuarioController.php',
						method : 'POST',
						params:{action:'acessoTotal', rows:Ext.encode(data)},
						success: function(response, opts) {
							var obj = Ext.decode(response.responseText);
							store.load({
								callback: function(records, operation, success) {
									Ext.ux.Alert.show('Sucesso !', obj.msg, 'success');	
									btn.enable();
								}
							});
						},
						failure: function(response, opts) {
							Ext.ux.Alert.show('Erro !', obj.msg, 'error');
							btn.enable();
					   }
					});
				}
			}, me);
	}

});