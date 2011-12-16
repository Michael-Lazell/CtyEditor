Ext.Loader.setConfig({
    enabled: true
    /*paths: {
        'Common' : 'app/common'
    }*/
});

Ext.application({
    name: 'CtyEditor',

    appFolder: 'app',

    controllers: [
        'CtyControlsController'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'leftcol',
                    region: 'west'
                },
                {
                    xtype: 'previewcol',
                    region: 'center'
                },
                {
                    xtype: 'rightcol',
                    region: 'east'
                }
            ]
        })
    }
});