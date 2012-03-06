Ext.define('App.controller.TreeMarkerController', {
    extend: 'Ext.app.Controller',

    stores: [
        'NewCtyMarker'
    ],
    models: [
        'NewCty' // This is just a short test
    ],
    views: [
        'PreviewCol', //
        //'RightCol',
        'TreeLeftCol',
        //'BlockEditWindow',
        //'InputEditWindow',
        'MarkerContextMenu',
        'ConfigForm'
    ],
    requires: [
        'Common.CtyEditor'
    ],

    init: function () {
        this.control({
            'leftcol': {
                itemcontextmenu: this.popupMenu,
                itemdblclick: this.editFromDblClick
            },
            'markerContextMenu [action=edit]': {
                click: this.editFromMenu
            },
            'markerContextMenu [action=deleteNode]': {
                click: this.confirmDeleteNode
            },
            'configform #configSubmitButton': {
                click: this.updateConfig
            }
        })
    },

    popupMenu: function(view, record, item, index, e) {
        //console.log(record);
        var menu = Ext.ComponentQuery.query('treeContextMenu')[0];
        if(!menu){
            menu = Ext.create('widget.markerContextMenu');
        }
        menu.currentNode = record;
        menu.showAt(e.getXY());
        e.stopEvent();
    },
    editNode: function(record) {
        //TODO this must show the inputEditWindow or blockEditWindow and fill in the values for the node

        switch(record.data.nodeType){
            case 'block':
                this.editBlock(record);
                break;
            case 'input':
                this.editInput(record);
                break;
        }
        
    },
    confirmDeleteNode: function(menu) {
        var node = menu.up('menu').currentNode;
        var nodeType = node.data.nodeType;
            if(nodeType === 'config' || nodeType === 'browse' || nodeType === 'index'){
                Ext.Msg.alert('Idiot!','You dumb fuck. Only blocks and inputs can be deleted.');
            } else {
                var me = this;
                Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete the ' + node.data.nodeType +' "' +
                    node.data.name + '" and its subnodes?', function(btn) {me.deleteNode(btn, node)} );
            }
    },
    deleteNode: function(btn, node){
        if(btn == 'yes'){
            node.remove();
        }
    },
    editBlock: function(record) {
        Ext.Msg.alert('Congratulations!', 'Simulating block editing!');
    },

    editInput: function(record) {
        Ext.Msg.alert('Congratulations!', 'Simulating input editing!');
    },

    editFromMenu: function(menu, item, e, eOpts) {
        this.editNode(menu.up('menu').currentNode);
    },
    editFromDblClick: function(view, record, item, index, e) {
        this.editNode(record);
    },
    updateConfig: function(button) {
        var tree = Ext.getStore('NewCtyMarker').tree;
        var form = button.ownerCt;
        var nameText = form.down('#configNameTextfield').getValue();
        //console.log(nameText);


        console.log(tree);
        var configNode = tree.getNodeById('config');
        configNode.data.name =


        console.log(configNode);
    }
});