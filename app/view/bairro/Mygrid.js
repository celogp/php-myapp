Ext.define('Myapp.view.bairro.Mygrid', {
    extend : 'Ext.ux.grid.Mygrid',
    alias  : 'widget.Bairromygrid',
    store  : 'Bairro',
	columns: [
	{
		header	 : 'Id',
		dataIndex: 'id',
		width: 15,
		filterable : true
	},{
		header	 : 'Código',
		width: 20,
		dataIndex: 'codigo', 
		filterable:true
	},{
		header	 : 'Descrição',
		dataIndex: 'descricao', 
		filterable: true
	},{
		header	 : 'Dt.Cadastro',
		dataIndex: 'dtcadastro', 
		xtype:'datecolumn', 
		format:'d/m/Y',
		filterable: true,
		filter:
		{
			type        : 'date'
			,beforeText : 'Antes'
			,afterText  : 'Depois'
			,onText     : 'Igual'
		}		
	},{
		header	 : 'Dt.Alteração',
		dataIndex: 'dtalteracao', 
		xtype:'datecolumn',
		format:'d/m/Y H:i:s',
		filterable: true,
		filter:
		{
			type        : 'date'
			,beforeText : 'Antes'
			,afterText  : 'Depois'
			,onText     : 'Igual'
		}		
	},{
		header	 : 'Sexo',
		dataIndex: 'sexo', 
		filterable: true, 
		renderer  : function (val, meta, record) 
		{
			if (val == 'M') {
				meta.tdCls = 'icon-btn-male';
				return 'Masculino';
			} else if (val == 'F')  {
				meta.tdCls = 'icon-btn-female';
				return 'Feminino';
			} else {
				meta.tdCls = 'icon-btn-female';
				return '';
			}
		}			
		,filter:
		{
			 type       : 'list'
			,phpMode   : true
			,options   : [ ['M', 'Masculino'], ['F', 'Feminino'] ]
		}
	}
	]
});