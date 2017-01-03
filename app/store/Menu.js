Ext.define('Myapp.store.Menu', {
    extend: 'Ext.data.Store',
    requires: [
        'Myapp.model.MenuRoot'
    ],
    model : 'Myapp.model.MenuRoot',
	storeId: 'MenuStore', 
	autoLoad: false
});