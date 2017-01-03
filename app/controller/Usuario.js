Ext.define('Myapp.controller.Usuario', {
	extend: 'Ext.ux.app.Mycontroller',
	mypanel: 'Usuario',
    models: ['Usuario'],
    stores: ['Usuario'],
    views : [
    	'usuario.Mypanel',
    	'usuario.Mygrid',
    	'usuario.Myform'
    ]
});