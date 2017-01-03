Ext.define('Myapp.store.Boolean', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Myapp.model.Boolean',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'BooleanStore',
			data: me.dt,
            proxy: {
                type: 'ajax',
                url: 'data/TBoolean.json',
                reader: {
                    type: 'json',
                    root: 'rows'
                }
            }
        }, cfg)]);
    }
});