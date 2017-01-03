Ext.define('Myapp.view.produto.Mygrid', {
    extend : 'Ext.ux.grid.Mygrid',
    alias  : 'widget.Produtomygrid',
    store  : 'Produto',
	columns: [{
		header	 : 'Id',
		dataIndex: 'id',
		width: 15,
		filterable: true
	},{
		header	 : 'Descricao',
		dataIndex: 'descricao'
	},{
		header	 : 'Quantidade',
		dataIndex: 'quantidade'
	}]
});