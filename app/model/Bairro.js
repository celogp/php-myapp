Ext.define('Myapp.model.Bairro', {
	extend: 'Ext.data.Model',
	proxy : {
		type : 'myproxyajax', 
		mypanel: 'bairro'
	},
	fields: [
		{name: 'id', type: 'int'},
		{name: 'descricao'}, 
		{name: 'codigo', type : 'int'}, 
		{name: 'dtcadastro', type : 'date', dateFormat: 'Y-m-d', dateWriteFormat: 'Y-m-d' },
		{name: 'dtalteracao', type : 'date', dateFormat: 'Y-m-d H:i:s', dateWriteFormat: 'Y-m-d H:i:s'} , 
		{name: 'sexo'}
	]
});