Ext.define('Ext.ux.app.Mycontroller', {
	extend: 'Ext.app.Controller'
	
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
			ref		: 'buttonNew',
			selector: me.mypanel + 'mypanel button[action='+me.mypanel+'new]'
		},{
			ref		: 'buttonDelete',
			selector: me.mypanel + 'mypanel button[action='+me.mypanel+'delete]'
		},{
			ref		: 'buttonSave',
			selector: me.mypanel + 'mypanel button[action='+me.mypanel+'save]'
		}];
		
		me.refs = me.refs ? Ext.Array.merge(me.refs, defaultRefs) : defaultRefs;
		me.callParent(arguments);

	}
	
	,init: function() {
		var me = this,
			listeners = {},
			btnNew = me.mypanel + 'mypanel button[action='+me.mypanel+'new]',
			btnSave = me.mypanel + 'mypanel button[action='+me.mypanel+'save]',
			btnDestroy = me.mypanel + 'mypanel button[action='+me.mypanel+'delete]';
			
		/* evento do grid */
		listeners[me.mygrid]  = {
			itemdblclick : me.onItemdblclick,
			itemclick : me.onItemclick
        };
		/* evento do tabpanel interno que recebe a grid e formulario*/
		listeners['tabpanel #' + me.mypanel+'tabpanel'] = {
			tabchange : me.ontabchange
		};
		
		/* evento dos botões */
		listeners[btnNew] = {
			click: me.onNew
		};
		
		listeners[btnDestroy] = {
			click: me.onDestroy
		};
		listeners[btnSave] = {
			click: me.onSave
		};

		listeners[me.mypanel + 'mypanel'] = {
			render: me.onRegisterEvents
		};
			
		me.listeners = Ext.Object.merge(listeners, me.listeners);
		
		me.control(me.listeners);
		
		console.log ('passando no init do controle principal');
		
	}
	
	,onRegisterEvents: function() {
		var me = this,
			store = me.getMygrid().getStore();
			
		store.on('write', me.onWriteStore, me);
		store.getProxy().on('exception', me.onErrorAction, me);
	}
	
	,onErrorAction: function(proxy, response){
		var me = this,
			obj = Ext.decode(response.responseText),
			store = me.getMygrid().getStore();
		
		Ext.ux.Alert.show('Erro !', obj.msg, 'error');
		
		store.load();
		me.getFormPanel().setLoading(false);
		me.getMygrid().setLoading(false);
		//me.getButtonSave().enable();

    }
    
    ,onWriteStore: function(proxy, operation){
		var me = this,
			obj = Ext.decode(operation.response.responseText),
			store = me.getMygrid().getStore(),
			idProperty = store.getProxy().getReader().getIdProperty();
			
		//me.getButtonSave().disable();
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
			store.load();
		}
		//me.getButtonSave().enable();
		me.getFormPanel().setLoading(false);
		me.getMygrid().setLoading(false);
		console.log('onWriteStore');
	}
	
	,ontabchange: function( tabPanel, newCard, oldCard, eOpts ) {
		var me = this;
			tbar = me.mypanel + 'toolbar';
		if (tabPanel.getActiveTab().itemId == 'FormularioPanel'){
			me.getButtonNew().setDisabled(false);
			me.getButtonSave().setDisabled(false);
		}else{
			me.getButtonNew().setDisabled(true);
			me.getButtonSave().setDisabled(true);
			//me.pagingtoolbar.down('#refresh').hide();
			
		}
	//tabPanel.up('toolbar').refresh.hide();
	//console.log ( tabPanel.down('pagingtoolbar') );
	//console.log ('#first');
	
	
/*        me.setChildDisabled('#first', currPage === 1 || isEmpty);
        me.setChildDisabled('#prev', currPage === 1 || isEmpty);
        me.setChildDisabled('#next', currPage === pageCount  || isEmpty);
        me.setChildDisabled('#last', currPage === pageCount  || isEmpty);
        me.setChildDisabled('#refresh', false);
	*/
	}
	
	,onNew: function (btn) {
		var me = this;
		me.getFormPanel().getForm().reset();
		me.getFormPanel().idRecord = 0;
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
			//btn = me.getButtonSave(),
			values = form.getValues();
		
		if(!form.isValid())
		{
			Ext.ux.Alert.show('Atenção !', 'Formulário precisa ser preechido por completo.!', 'warning');
			return;
        }
		
		//me.getButtonSave().disable();
        me.getFormPanel().setLoading('Aguarde...');
        if (me.getFormPanel().idRecord==0)
			{
				record = Ext.create(store.getProxy().getModel().modelName);
				record.set(values);
				store.add(record);	
		//		console.log ('passei idrecord==0');
			}
		else
			{
		//		console.log ('passei setvalues');
				record.set(values);
			}
		
		store.sync();
		
		me.getFormPanel().setLoading(false);
		me.getMygrid().setLoading(false);
		
		//console.log ('salvando fim ');
		//console.log (me.getButtonSave());
		//me.getButtonSave().enable();
    }
	
	,onItemclick: function ( me, record, item, index, e, eOpts ){
		this.getFormPanel().loadRecord(record);
		this.getFormPanel().idRecord = record.get(this.getMygrid().getStore().getProxy().getReader().getIdProperty());
	}
	
	,onItemdblclick: function ( me, record, item, index, e, eOpts ){
		this.getFormPanel().loadRecord(record);
		this.getFormPanel().idRecord = record.get(this.getMygrid().getStore().getProxy().getReader().getIdProperty());
		//this.onMudaTab(me.up('tabpanel'), 1);
		me.up('tabpanel').setActiveTab(1);
	}

});