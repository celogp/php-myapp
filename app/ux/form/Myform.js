Ext.define('Ext.ux.form.Myform', {
    extend		 : 'Ext.form.Panel'
    ,requires	 : [
    	'Ext.form.field.Number'
		,'Ext.form.field.Date'
		,'Ext.form.field.ComboBox'
    ]
	,idRecord	 : 0
	,bodyPadding	 : 5
	,autoScroll	 : true
	,border		 : false
	,defaultType	 : 'textfield'
    ,layout		 : 'form'
	,fieldDefaults: {
		 allowBlank: false
		,labelAlign: 'right'
		,msgTarget : 'side'
	}
	,constructor: function() {
		var me = this;

		me.dockedItems	=
		[{
			xtype: 'toolbar',
			items: [
			{
				text  : 'New',
				action: 'new'
			}, {
				text  : 'Save',
				action: 'save'
			},{
				text  : 'Grade',
				action: 'grid'
			}]
		}];
		me.callParent(arguments);		
	}
});