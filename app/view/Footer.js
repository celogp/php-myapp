Ext.define('Myapp.view.Footer', {
	extend: 'Ext.panel.Panel'
	,alias : 'widget.footer'
    ,frame : true
    ,border: false
	,dockedItems : [{
	 xtype: 'toolbar'
	,dock: 'bottom'
	,items : [
		,{
			 text: 'Logout'
			,id : 'btnlogout'
			,action : 'logout'
			,tooltip: 'Encerrar o login atual'
		}
		,'-'
		,{
			 xtype : 'tbtext'
			,text: 'Usuário:'
			,id : 'lblusuario'
		}
		,{
			 xtype : 'tbtext'
			,text: ServerVariaveis.nomeusuario
			,id : 'txtusuario'
			,width : 200
		}
		,'-'
		,{ xtype: 'tbspacer', width: 250 }
		, ServerVariaveis.softwarehouse
	]
	}]
		
	,init:function() {
		var me = this;

		me.callParent(arguments);
	}
			
});