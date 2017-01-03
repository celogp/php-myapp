Ext.define('Myapp.model.MenuItem', {
    extend: 'Ext.data.Model',

    uses: [
        'Myapp.model.MenuRoot'
    ],

    fields: [
        {
            name: 'text'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'mypanel'
        },
        {
            name: 'id'
        },
        {
            name: 'menu_id'
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

    belongsTo: {
        model: 'Myapp.model.MenuRoot',
        foreignKey: 'menu_id'
    }
});