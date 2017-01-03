Ext.define('Ext.ux.grid.Mygrid', {
	 extend: 'Ext.grid.Panel'
    ,border: false
    ,columnLines : true
 	,autoDestroy : true
	,requires : [
		'Ext.ux.grid.FiltersFeature', 
		'Ext.grid.column.Date'
	]
	
	,viewConfig: {
         stripeRows: true
    }
	
	,constructor: function() {
		var me = this,
			mystore = me.getStore();

		me.features = [ {
			ftype: 'filters',
			encode: true, // json encode the filter query
			local: false
		}];
		
		me.dockedItems = 
		[
		{
			xtype: 'pagingtoolbar',
			dock: 'top',
			store : mystore,
			displayInfo: true,
			displayMsg: 'De {0} a {1} até {2}',
			emptyMsg: 'Não existe informação para apresentar', 
			items: 
			[
				{
					text  : 'New',
					action: 'new'
				},
				{
					text	: 'Delete',
					action	: 'delete',
					disabled : true
				}
			]
		}
		];
		
        me.callParent(arguments);
	}
	
	,initComponent: function() {
		var me = this;
		/*	mystore = me.getStore();

		me.features = [ {
			ftype: 'filters',
			encode: true, // json encode the filter query
			local: false
		}];
		*/
		
		me.on('render', me.applyDefaultColumns, me);
        me.getSelectionModel().on('selectionchange', me.onSelectionChange, me);
		me.callParent(arguments);
		me.getStore().load();
	}
	
	,applyDefaultColumns: function(){
		var me = this,
			i,
			column;
		
		for (i in me.columns){
			column = me.columns[i];
			column.flex = column.width || column.flex || 1;
			//column.filterable = true;

		};
	},
	
	onSelectionChange: function(selModel, selections){
		var me = this;
		if (me.down('button[action=delete]') != null){
			me.down('button[action=delete]').setDisabled(selections.length !== 1);
		}
		
    }
	
});