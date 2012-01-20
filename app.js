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
        //'Ext.form.*'   // This is required for the custom VTypes below
        'Ext.form.VTypes'
    ],

    launch: function () {
        /*var test = Ext.create(Common.Common, {
            name: 'Mike',
            food: 'pizza'
        });
        alert(test.getName());
        alert(test.getFood());*/

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
        //console.log('Current block: ' + Editor.getCurrentBlock());
    }
});