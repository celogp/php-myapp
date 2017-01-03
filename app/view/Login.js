Ext.define('Myapp.view.Login', {
	extend      : 'Ext.window.Window',
	alias       : 'widget.Login',
	layout      : 'fit',
	bodyStyle   : 'padding:10px;',
	title       : 'Autenticação',
	id          : 'Login',
	labelAlign  : 'left',
	closable    : false,
	resizable   : false,
	modal       : true,
    autoShow    : true,
	
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		items :	[ 
				new Ext.form.FormPanel({
					id:'pnlLogin',
					bodyStyle:'padding:5px',
					baseCls: 'x-plain',
					items:[{
						xtype:'textfield',
						fieldLabel:'Login',
						name:'loginUsuario',
						id  :'loginUsuario',
						
						allowBlank:false, 
						blankText: 'Usuário Obrigatório'
					},{
						xtype:'textfield',
						fieldLabel:'Password',
						name:'loginSenha',
						id  :'loginSenha',
						inputType:'password',
						allowBlank:false, 
						blankText : 'Senha Obrigatória'
					}]
				})
				], buttons:[{ 
					text: 'Login', 
					formBind: true, 
					action: 'login',
					scope: this
				}]

			});
			me.callParent(arguments);
    }
});