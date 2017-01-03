Ext.define('Myapp.view.MenuItem', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.MenuItem',
    border: 0,
    autoScroll: true,
    title: '',
    rootVisible: false,

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});