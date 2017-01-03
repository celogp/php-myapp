Ext.define('Myapp.view.usuario.Mygrid', {
    extend : 'Ext.ux.grid.Mygrid',
    alias  : 'widget.Usuariomygrid',
    store  : 'Usuario',
	columns: [{
		header	 : 'Id',
		width: 15,
		dataIndex: 'id'
	},{
		header	 : 'Login',
		dataIndex: 'login'
	},{
		header	 : 'Senha',
		dataIndex: 'senha', 
		renderer  : function (val, meta, record) 
		{
			return '***************';
		}			
		
	}]
});