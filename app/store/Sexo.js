Ext.define('Myapp.store.Sexo', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Myapp.model.Sexo',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SexoStore',
            proxy: {
                type: 'ajax',
                url: 'data/TSexo.json',
                reader: {
                    type: 'json',
                    root: 'rows'
                }
            }
        }, cfg)]);
    }
});