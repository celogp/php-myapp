Ext.define('Myapp.view.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    layout: {
        type: 'border'
    },
    
    items : [
        {
            xtype: 'mainmenu',
            //split       : true,
            region: 'west'
        },
        {
            region   : 'center',
            xtype    : 'tabpanel',
            itemId   : 'tabPanelCenter',
            activeTab: 0,
            plain    : true,
            border   : false,
            defaults : {
                border: false
            },
            items    : [{
                xtype: 'home'
            }]
        }, 
        {
            xtype: 'footer', 
            region: 'south'
        }
    ]
});