Ext.define('Ext.ux.panel.Mypanel' ,{
    extend: 'Ext.panel.Panel',
    layout: 'fit', 
	constructor: function() {
        var me = this;
		
		me.items = [
		{
			xtype: 'tabpanel',
			tabPosition: 'bottom',
			itemId: me.mypanel + 'tabpanel',
			activeTab: 0,
			items: 
			[
				{
					xtype: 'panel',
					title: 'Grade',
					itemId: 'GradePanel',
					overflowY : 'auto',
					items: [
						{
							xtype: me.mypanel + 'mygrid'
						}
					]
				}, 
				{
					xtype: 'panel',
					title: 'Formulario',
					itemId: 'FormularioPanel',
					overflowY : 'auto',
					disabled : true,
					items: [
						{
							xtype: me.mypanel + 'myform'
						}
					]
				}				
			]
		}
		];
        me.callParent(arguments);
	}
});