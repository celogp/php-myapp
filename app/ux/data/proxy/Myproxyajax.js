Ext.define('Ext.ux.data.proxy.Myproxyajax', {
	extend		 : 'Ext.data.proxy.Ajax',
	alias		 : 'proxy.myproxyajax',
    type		 : 'ajax',
    baseUrl		 : 'php/controller',
    actionRead   : 'Controller.php?action=read',
    actionCreate : 'Controller.php?action=add',
    actionUpdate : 'Controller.php?action=save',
    actionDestroy: 'Controller.php?action=destroy',
    reader		 : {
        type		   : 'json',
        root		   : 'rows',
        successProperty: 'success', 
		totalProperty: 'qtdRows'
    },
    writer: {
        type		  : 'json',
        root		  : 'rows',
        writeAllFields: false,
        encode		  : true
    },
    
    constructor: function() {
		var me = this;
		me.callParent(arguments);

		if(me.url === undefined && !Ext.Object.getValues(me.api).length)
		{        

			me.api.read = me.baseUrl + '/' + me.ucWords(me.mypanel) + me.actionRead;
			me.api.create = me.baseUrl + '/' + me.ucWords(me.mypanel) + me.actionCreate;
			me.api.update = me.baseUrl + '/' + me.ucWords(me.mypanel) + me.actionUpdate;
			me.api.destroy = me.baseUrl + '/' + me.ucWords(me.mypanel) + me.actionDestroy;
			
        }
    },
	
    ucWords: function(string) {
		return string.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
	        return $1.toUpperCase();
	    });
	}
});