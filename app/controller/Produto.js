Ext.define('Myapp.controller.Produto', {
	extend: 'Ext.ux.app.Mycontroller',
	mypanel: 'Produto',
    models: ['Produto'],
    stores: ['Produto'],
    views : [
    	'produto.Mypanel',
    	'produto.Mygrid',
    	'produto.Myform'
    ]
});