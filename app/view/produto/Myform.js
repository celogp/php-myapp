Ext.define('Myapp.view.produto.Myform', {
    extend: 'Ext.ux.form.Myform',
    alias : 'widget.Produtomyform',
    items : [{
		name	  : 'id',
		fieldLabel: 'Id',
		disabled  : true
	},{
		name	  : 'descricao',
		fieldLabel: 'Descricao',
		maxLength : 100
	},{
		name	  : 'quantidade',
		fieldLabel: 'Quantidade',
		xtype	  : 'numberfield',
		maxLength : 11
	}]
});