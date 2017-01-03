Ext.define('Myapp.view.menuusuario.Myform', {
    extend: 'Ext.ux.form.Myform',
    alias : 'widget.Menuusuariomyform',
    items : [
	{
		name	  : 'descrusuario',
		fieldLabel: 'Login',
		disabled  : true

	},{
		name	  : 'descrmenu',
		fieldLabel: 'Menu',
		disabled  : true
	},{
		name	  : 'descrsubmenu',
		fieldLabel: 'Sub menu',
		disabled  : true
	},{
		 xtype : 'Comboboolean',
		 fieldLabel    : 'Pode acessar',
		 name          : 'podeacessar'
	},{
		 xtype : 'Comboboolean',
		 fieldLabel    : 'Pode incluir',
		 name          : 'podeincluir'
	},{
		 xtype : 'Comboboolean',
		 fieldLabel    : 'Pode excluir',
		 name          : 'podeexcluir'
	},{
		 xtype : 'Comboboolean',
		 fieldLabel    : 'Pode salvar',
		 name          : 'podesalvar'
	}
	]
	
	,initComponent: function(){
		var me = this;

		me.dockedItems	=
		[{
			xtype: 'toolbar',
			items: [
			{
				text  : 'Save',
				action: 'save'
			},{
				text  : 'Grade',
				action: 'grid'
			}]
		}];
        me.callParent(arguments);
	}
});