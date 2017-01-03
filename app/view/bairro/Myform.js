Ext.define('Myapp.view.bairro.Myform', {
    extend: 'Ext.ux.form.Myform',
    alias : 'widget.Bairromyform',
    items : [{
		name	  : 'id',
		fieldLabel: 'Id',
		disabled : true
		//anchor	  : '12%'
	},{
		name	  : 'codigo',
		fieldLabel: 'Código'
		//anchor	  : '10%'
	},{
		name	  : 'descricao',
		fieldLabel: 'Descricao',
		maxLength : 100
	},{
		name	  : 'dtcadastro',
		fieldLabel: 'Dt.Cadastro',
		maxLength : 12, 
		xtype:'datefield', 
		format:'d/m/Y', 
		altFormats: 'd,m,Y|d.m.Y|d-m-Y|d m Y|dmY',
		submitFormat: 'Y-m-d'
	},{
		name	  : 'dtalteracao',
		fieldLabel: 'Dt.Alteração',
		maxLength : 20, 
		xtype:'datefield', 
		format:'d/m/Y H:i:s', 
		altFormats: 'dmY His',
		submitFormat: 'Y-m-d H:i:s'
	},{
		 xtype : 'combosexo'
		,fieldLabel    : 'Sexo'
		,name          : 'sexo'
		
	}
	]
});