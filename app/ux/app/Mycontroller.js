Ext.define('Ext.ux.app.Mycontroller', {
	extend: 'Ext.app.Controller'
	
	,podeincluir: 'S'
	,podeexcluir: 'S'
	,podesalvar: 'S'
	
	,constructor: function() {
		var me = this,
			defaultRefs;
		
		me.myform = Ext.String.format('{0}mypanel {0}myform', me.mypanel);
    	me.mygrid = Ext.String.format('{0}mypanel {0}mygrid', me.mypanel);
		
    	defaultRefs = [
		{
			ref     : 'mygrid',
	        selector: me.mygrid
		},{
			ref     : 'formPanel',
			selector: me.myform
		},{
			ref		: 'buttonSave',
			selector: me.myform + ' button[action=save]'
		},{
			ref		: 'buttonNew',
			selector: me.mygrid + ' button[action=new]'
		},{
			ref		: 'buttonNewForm',
			selector: me.myform + ' button[action=new]'
		},{
			ref		: 'buttonGrade',
			selector: me.myform + ' button[action=grid]'
		},{
			ref		: 'buttonDestroy',
			selector: me.mygrid + ' button[action=delete]'
		}];
		
		me.refs = me.refs ? Ext.Array.merge(me.refs, defaultRefs) : defaultRefs;
		me.callParent(arguments);
	}
	
	,init: function() {
		var me = this,
			listeners = {},
			btnNew = me.mygrid + ' button[action=new]',
			btnNewForm = me.myform + ' button[action=new]',
			btnDestroy = me.mygrid + ' button[action=delete]',
			btnSave = me.myform + ' button[action=save]',
			btnGrade = me.myform + ' button[action=grid]';
			
			
		listeners[me.mygrid]  = {
			itemdblclick : me.onItemdblclick
        };
		listeners[btnNew] = {
			click: me.onNewGrade
		};
		listeners[btnNewForm] = {
			click: me.onNewForm
		};
		listeners[btnDestroy] = {
			click: me.onDestroy
		};
		listeners[btnSave] = {
			click: me.onSave
		};
		listeners[btnGrade] = {
			click: me.onChangeGrid
		};
		listeners[me.mypanel + 'mypanel'] = {
			render: me.onRegisterEvents
		};
			
		me.listeners = Ext.Object.merge(listeners, me.listeners);
		me.control(me.listeners);
		//console.log ('passando no init do controle principal');
	}
	
	,onRegisterEvents: function() {
		var me = this,
			store = me.getMygrid().getStore(),
			activeTab = Ext.ComponentQuery.query('tabpanel')[0].getActiveTab(),
			btnSave = me.getButtonSave(), 
			btnDestroy = me.getButtonDestroy(),
			btnGrade = me.getButtonGrade(),
			btnNew = me.getButtonNew(),
			btnNewForm = me.getButtonNewForm();
		
		store.on('beforesync', me.onBeforesync, me);
		store.on('write', me.onWriteStore, me);
		store.getProxy().on('exception', me.onErrorAction, me);
	
		me.podeincluir = activeTab.podeincluir;
		me.podeexcluir = activeTab.podeexcluir;
		me.podesalvar = activeTab.podesalvar;
/*		
		console.log (me.podeincluir);
		console.log (me.podeexcluir);
		console.log (me.podesalvar);
		console.log(activeTab);
*/	
		if (me.podeincluir == 'N'){
			if (btnNew != null){
				btnNew.hide();
			}
			if (btnNewForm != null){
				btnNewForm.hide();
			}
		}

		if (me.podeexcluir == 'N'){
			if (btnDestroy != null){
				btnDestroy.hide();
			}
		}
		
		if (me.podesalvar == 'N'){
			if (btnSave != null){
				btnSave.hide();
			}
		}
	}
	
	,onBeforesync: function ( options, eOpts ){
		var me = this,
			btnSave = me.getButtonSave(), 
			btnGrade = me.getButtonGrade(),
			btnNew = me.getButtonNew(),
			btnDestroy = me.getButtonDestroy(),
			btnNewForm = me.getButtonNewForm();
			
		if (btnSave != null){
			btnSave.disable();
		}
		if (btnGrade != null){
			btnGrade.disable();
		}
		if (btnNew != null){
			btnNew.disable();
		}
		if (btnNewForm != null){
			btnNewForm.disable();
		}
		if (btnDestroy != null){
			btnDestroy.disable();
		}
	}
	
	,onErrorAction: function(proxy, response){
		var me = this,
			btnSave = me.getButtonSave(),
			btnGrade = me.getButtonGrade(),
			btnNew = me.getButtonNew(),
			btnNewForm = me.getButtonNewForm(),
			obj = Ext.decode(response.responseText),
			store = me.getMygrid().getStore();
		Ext.ux.Alert.show('Erro !', obj.msg, 'error');
		store.load();
		me.getFormPanel().setLoading(false);
		me.getMygrid().setLoading(false);
		
		if (btnSave != null){
			btnSave.enable();
		}
		if (btnGrade != null){
			btnGrade.enable();
		}
		if (btnNew != null){
			btnNew.enable();
		}
		if (btnNewForm != null){
			btnNewForm.enable();
		}
		
    }
    
    ,onWriteStore: function(proxy, operation){
		var me = this,
			btnSave = me.getButtonSave(),
			btnGrade = me.getButtonGrade(),
			btnNew = me.getButtonNew(),
			btnNewForm = me.getButtonNewForm(),
			obj = Ext.decode(operation.response.responseText),
			store = me.getMygrid().getStore(),
			idProperty = store.getProxy().getReader().getIdProperty();
        
		if(obj.success)
		{
			Ext.ux.Alert.show('Sucesso !', obj.msg, 'success');
			if(operation.action === 'destroy') {
				me.getFormPanel().getForm().reset(); //?
			}
			else {
				if (me.getFormPanel().idRecord==0){
					me.getFormPanel().getForm().reset();
				}else {
					me.getFormPanel().idRecord = obj.rows[idProperty];
				}
			}
		}
		else
		{
			Ext.ux.Alert.show('Erro !', obj.msg, 'error');
			//tirando para ver o que acontece em tese não precisa fazer outro load se deu erro.
			//store.load(); 
		}
		if (btnSave != null){
			btnSave.enable();
		}
		if (btnGrade != null){
			btnGrade.enable();
		}
		if (btnNew != null){
			btnNew.enable();
		}
		if (btnNewForm != null){
			btnNewForm.enable();
		}
		me.getFormPanel().setLoading(false);
		me.getMygrid().setLoading(false);
	}
	
	,onNewGrade: function (btn) {
		this.getFormPanel().getForm().reset();
		this.getFormPanel().idRecord = 0;
		this.onMudaTab(btn.up('tabpanel'), 1);
	}

	,onNewForm: function () {
		this.getFormPanel().getForm().reset();
		this.getFormPanel().idRecord = 0;
	}
	
    ,onChangeGrid: function(btn) {
		this.onMudaTab(btn.up('tabpanel'), 0);
    }

    ,onDestroy: function() {
		var me = this;
		Ext.Msg.confirm('Confirmação', 'Realmente deseja deletar o registro selecionado ?', function(btn){
            if(btn === 'yes') {
				var record = me.getMygrid().getSelectionModel().getSelection()[0],
					store = me.getMygrid().getStore();
				store.remove(record);
				store.sync();
            }
        }, me);
    }
    
	,onSave: function(){
		var me = this,
            form = me.getFormPanel().getForm(),
            record = form.getRecord(),
            store = me.getMygrid().getStore(),
			values = form.getValues();
			
		if(!form.isValid())
		{
			Ext.ux.Alert.show('Atenção !', 'Formulário precisa ser preechido por completo.!', 'warning');
			return;
        }
        me.getFormPanel().setLoading('Aguarde...');
        if (me.getFormPanel().idRecord==0)
			{
				record = Ext.create(store.getProxy().getModel().modelName);
				record.set(values);
				store.add(record);	
			}
		else
			{
				record.set(values);
			}
		store.sync();
		me.getFormPanel().setLoading(false);
		me.getMygrid().setLoading(false);
    }
	
	,onMudaTab: function(objTab, tabAtual){
		objTab.getActiveTab().disable();
		objTab.setActiveTab(tabAtual);
		objTab.getActiveTab().enable();
//		console.log( objTab.getActiveTab() ) ;
	}	
	
	,onItemdblclick: function ( me, record, item, index, e, eOpts ){
		this.getFormPanel().loadRecord(record);
		this.getFormPanel().idRecord = record.get(this.getMygrid().getStore().getProxy().getReader().getIdProperty());
		this.onMudaTab(me.up('tabpanel'), 1);
		//console.log( me.up('tabpanel') ) ;
//		console.log( me.up('main #tabPanelCenter') ) ;
	}
});