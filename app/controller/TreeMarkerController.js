Ext.define('App.controller.TreeMarkerController', {
    extend: 'Ext.app.Controller',

    stores: [
        'NewCtyMarker'
    ],
    models: [
        'NewCty' // This is just a short test
    ],
    views: [
        'PreviewCol',
        'RightCol',
        'TreeLeftCol',
        'BlockEditWindow',
        'InputEditWindow',
        'MarkerContextMenu'
    ],

    init: function () {
        this.control({
            'leftcol': {
                itemcontextmenu: this.popupMenu
            }

        })
    },

    popupMenu: function(view, record, item, index, e) {
        console.log(record);
        var menu = Ext.ComponentQuery.query('treeContextMenu')[0];
        if(!menu){
            menu = Ext.create('widget.markerContextMenu');
        }
        menu.showAt(e.getXY());
        e.stopEvent();
    }


});