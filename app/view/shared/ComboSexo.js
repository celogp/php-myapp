Ext.define('Myapp.view.shared.ComboSexo', {
    extend          : 'Ext.form.field.ComboBox'
    ,alias          : 'widget.combosexo'
	,editable       : false
    ,displayField   : 'descricao'
    ,valueField     : 'id'
	,forceSelection : true
	,multiSelect    : false
    ,mode           : 'local'
    ,triggerAction  : 'all'
    ,listConfig     : {
		getInnerTpl : function(val) {
			return '<div class="x-combo-list-item"><img src="' + Ext.BLANK_IMAGE_URL + '" class="chkCombo-default-icon chkCombo" /> {descricao}</div>';
     	}
    }
    ,store: 'Sexo'
});