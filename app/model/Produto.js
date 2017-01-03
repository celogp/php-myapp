Ext.define('Myapp.model.Produto', {
	extend: 'Ext.data.Model',
	proxy : {
		type : 'myproxyajax',
		mypanel: 'produto'
	},
	fields: [
		{name: 'id', type: 'int'},
		{name: 'descricao'},
		{name: 'quantidade', type: 'int'}
	]
});