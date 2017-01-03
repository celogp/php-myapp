Ext.define('Myapp.view.menuusuario.Mygrid', {
    extend : 'Ext.ux.grid.Mygrid',
    alias  : 'widget.Menuusuariomygrid',
    store  : 'Menuusuario',
	columns: [
	{
		header	 : 'Login',
		dataIndex: 'descrusuario',
		filterable : true
	},{
		header	 : 'Descrição menu',
		dataIndex: 'descrmenu',
		filterable : true
	},{
		header	 : 'Descrição sub menu',
		dataIndex: 'descrsubmenu',
		filterable : true
	},{
		header	 : 'Pode acessar',
		dataIndex: 'podeacessar',
		filterable : true
	},{
		header	 : 'Pode incluir',
		dataIndex: 'podeincluir',
		filterable : true
	},{
		header	 : 'Pode excluir',
		dataIndex: 'podeexcluir',
		filterable : true
	},{
		header	 : 'Pode salvar',
		dataIndex: 'podesalvar',
		filterable : true
	}
	]
    
	,initComponent: function(){
        var me = this;
		
		me.dockedItems =
		[
		{
			xtype: 'pagingtoolbar',
			itemId: me.mypanel + 'toolbar',
			dock: 'top',
			store : me.getStore(),
			displayInfo: true,
			displayMsg: 'de {0} a {1} até {2}',
			emptyMsg: 'Não existe informação para apresentar', 
			items: [
			'-',{
				text  : 'Acesso total',
				itemId: 'btnAcesstotal',
				action: 'AcessoTotal',
				disabled : true
			}]
		}
		];
        me.getSelectionModel().on('selectionchange', me.onSelectionChange, me);
        me.callParent(arguments);
	}	
	
	,onSelectionChange: function(selModel, selections){
		var me = this;
		me.down('button[action=AcessoTotal]').setDisabled(selections.length !== 1);
    }
	
});