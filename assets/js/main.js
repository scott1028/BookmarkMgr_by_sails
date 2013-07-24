Ext.onReady(function () {
	// 先清場
	Ext.getBody().setHTML('');

	Ext.define('app.models.bookmark', {
		extend: 'Ext.data.Model',
		fields: [
			{name: 'group', type: 'string'},
			{name: 'label', type: 'string'},
			{name: 'url', type: 'string'}
		],
		proxy: {
			type: 'rest',
			url: '/bookmarks',
			reader: {
				type: 'json',
				root: ''
			},
			limitParam:false,
			pageParam:false,
			startParam:false,
            noCache: false,
		}
	});

	// bookmark_store
	app.bookmark_store=Ext.create('Ext.data.Store', {
		fields:['group', 'label', 'url'],
		model:'app.models.bookmark',
		autoLoad:true
	});

	var viewport = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		items: [
			{
				xtype:'grid',
				store: app.bookmark_store,
				columns: [
					{ text: 'group', dataIndex: 'group', flex:1 },
					{ text: 'label', dataIndex: 'label', flex: 2 },
					{ text: 'url', dataIndex: 'url', flex:6 }
				],
				region:'center'
			}
		]
	});
});