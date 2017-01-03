Ext.define('Myapp.controller.Main', {
	 extend	: 'Ext.ux.app.Mycontroller'
	
	,views   : [
	     'Footer'
	    ,'Home'
    ]
    ,refs	: [
		{
		ref     : 'tabPanel',
		selector: 'app-main #tabPanelCenter'
		}
	]
	
	,init: function() {
		this.control({
			"mainmenu": {
                render: this.onPanelRender
            }, 
			"treepanel": {
				itemclick: this.onCreateTab
			}, 
			"footer button[action=logout]": {
				click: this.onLogout
			}
		});
	}
	
	,onCreateTab: function(tree, record){
		var me = this,
			tabOpen;
		
		if ( record.get('leaf') )
		{
			tabOpen = me.getTabPanel().items.findBy(function(tab){
				return tab.title === record.get('text');
			});

			if(!tabOpen)
			{
				tabOpen = me.getTabPanel().add({
					xtype: record.raw.mypanel + 'mypanel',
					title: record.get('text'),
					iconCls: record.get('iconCls'),
					autoShow: true,
					closable: true, 
					itemId: record.get('id'),
					podeincluir : record.raw.podeincluir,
					podeexcluir : record.raw.podeexcluir,
					podesalvar : record.raw.podesalvar
					//autoScroll:true, 
					//frame: true
				});
			}
			
			me.getTabPanel().setActiveTab(tabOpen);
		}
    }
	
	,onPanelRender: function(component, eOpts) {
		//console.log ('panel render');
    }
	
	,onLogout: function(button, e, eOpts) {
		var winlogin = new Myapp.view.Login();
		winlogin.show();
    }
});