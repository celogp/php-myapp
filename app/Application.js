Ext.define('Myapp.Application', {
    name: 'Myapp',

    extend: 'Ext.app.Application',

    requires:[
         'Ext.tab.Panel'
        ,'Ext.form.Panel'
        ,'Ext.tree.Panel'
        ,'Ext.layout.container.Border'
        ,'Ext.layout.container.Accordion'
        ,'Ext.layout.container.Form'
        ,'Ext.toolbar.TextItem'
        ,'Ext.toolbar.Spacer'
        ,'Ext.toolbar.Paging'
        ,'Ext.ux.Alert'
        ,'Ext.ux.data.proxy.Myproxyajax'
        ,'Myapp.view.shared.ServerVariaveis'
        ,'Overrides.*'
    ],

    views: [
        // TODO: add views here
         'Menu'
        ,'Home'
        ,'Footer'
    ],

    controllers: [
        // TODO: add controllers here
        'Login'
        ,'Main'
        ,'Bairro'
        ,'Produto'
        ,'Usuario'
        ,'Menuusuario'
    ],

    stores: [
        // TODO: add stores here
    ],

    launch: function() {
        var winlogin = new Myapp.view.Login();
        winlogin.show();
    }

});
