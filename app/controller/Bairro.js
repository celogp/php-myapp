Ext.define('Myapp.controller.Bairro', {
	extend: 'Ext.ux.app.Mycontroller',
	mypanel: 'Bairro',
    models: ['Bairro'],
    stores: ['Bairro', 'Sexo'],
    views : [
    	'bairro.Mypanel',
    	'bairro.Mygrid',
    	'bairro.Myform', 
		'shared.ComboSexo'
    ], 
	
	initComponent: function() {
		//var me = this, 
			//mystore = Ext.data.StoreManager.get('SexoStore');
			//SexoStore.load();
		//
		console.log ('init da tela bairro');
		
	}	
});