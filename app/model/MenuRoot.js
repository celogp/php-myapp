Ext.define('Myapp.model.MenuRoot', {
    extend: 'Ext.data.Model',

    uses: [
        'Myapp.model.MenuItem'
    ],

    fields: [
        {
            name: 'title'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'id'
        }, 
		{
			name : 'leaf'
		}, 
		{
			name : 'podeincluir'
		}, 
		{
			name : 'podeexcluir'
		}, 
		{
			name : 'podesalvar'
		}
		
    ],

    hasMany: {
        model: 'Myapp.model.MenuItem',
        foreignKey: 'menu_id',
        name: 'items'
    }
	
	,proxy: {
		type: 'ajax'
//		,url: 'data/TMenu.json'
		,url : 'php/helper/Menu.php'
		,reader: {
			type: 'json',
			root: 'items'
		}
	}

});