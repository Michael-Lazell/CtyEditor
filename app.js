Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'App' : 'app',
        'Common' : 'common/js/'
    }
});







Ext.application({
    /*name: 'CtyEditor',*/
    name: 'App',

    appFolder: 'app',

    controllers: [
        'CtyControlsController',
        'TreeMarkerController'
    ],
    requires: [
        //'Common.Common',
        'Common.CtyEditor',
        //'Ext.form.*',   // This is required for the custom VTypes below
        'Ext.form.VTypes'
    ],

    launch: function () {

        Ext.create('Ext.container.Viewport', {

            layout: 'border',
            items: [
                {
                    xtype: 'toolbar',
                    region: 'north',
                    items: [
                        {
                            text: 'New Contenttype',
                            action: 'loadTestContenttype',
                            urlPath: 'data/newCtyMarker.json'
                        },
                        {
                            text: 'Load test1',
                            action: 'loadTestContenttype',
                            urlPath: 'data/contenttype1.json'
                        },
                        {
                            text: 'Load test2',
                            action: 'loadTestContenttype',
                            urlPath: 'data/contenttype2.json'
                        }
                    ]
                },
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
        });

        // TODO: Custom VTypes can go here for now until I figure out where to put them. Don't forget that Ext.form.* is required
        Ext.apply(Ext.form.VTypes, {
            // noSpace prevents spaces from being used is some fields.
            noSpace: function (val, field) {
                return !/\s/g.test(val);
            },
            //noSpaceMask: /[a-z0-9_]/i,
            noSpaceText: 'No spaces are allowed for this field.'



        });
        if(!Editor) {
            var Editor = Common.CtyEditor;
        }
        console.log('Current block: ' + Editor.getCurrentBlock());
    }
});