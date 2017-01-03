Ext.define('Myapp.view.usuario.Myform', {
    extend: 'Ext.ux.form.Myform',
    alias : 'widget.Usuariomyform',
    items : [{
		name	  : 'id',
		fieldLabel: 'Id',
		maxLength : 10,
		disabled  : true
	},{
		name	  : 'login',
		fieldLabel: 'Login',
		maxLength : 60
	},{
		name	  : 'senha',
		fieldLabel: 'Senha',
		inputType:'password',
		maxLength : 60
	}]
});