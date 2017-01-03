Ext.define('Myapp.model.Menuusuario', {
	extend: 'Ext.data.Model',
	proxy : {
		type : 'myproxyajax',
		mypanel: 'menuusuario'
	},
	fields: [
		{name: 'id', type: 'int'},
		{name: 'id_usuario', type: 'int'},
		{name: 'menu_id', type: 'int'},
		{name: 'submenu_id', type: 'int'}, 
		'descrusuario',
		'descrmenu',
		'descrsubmenu', 
		'podeacessar',
		'podeincluir',
		'podeexcluir',
		'podesalvar'
	]
});