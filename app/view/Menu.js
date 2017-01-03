Ext.define('Myapp.view.Menu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainmenu',
	width: 200,
	collapsible: true,
	//collapsed:true,  // false inicia aberto
    layout: {
        type: 'accordion'
    },
    iconCls: 'home',
    title: 'Menu'
});