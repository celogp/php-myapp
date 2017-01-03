Ext.define('Myapp.model.Usuario', {
	extend: 'Ext.data.Model',
	proxy : {
		type : 'myproxyajax',
		mypanel: 'usuario'
	},
	fields: [
		{name: 'id', type: 'int'},
		'login',
		'senha'
	]
});