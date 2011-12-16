/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/24/11
 * Time: 12:14 PM
 * To change this template use File | Settings | File Templates.
 */
/*var store = Ext.create('Ext.data.TreeStore', {
    "success": true,
    "root": {
        "name": "root",
        "text": "The root",
        "expanded": true,
        "children": [
            {
                "expanded": true,
                "text": "Config",
                "name": "Person",
                "children": [
                    { "text": "Block1", "name": "Personal info", "expanded": true, "children": [
                        { "text": "Input", "name": "last_name", "leaf": true }
                    ] },
                    { "text": "Block 2", "name": "More info", "expanded": true, "children": [
                        { "text": "Input", "name": "first_name", "leaf": true }
                    ] }
                ]
            },
            {
                "expanded": true,
                "text": "Browse",
                "name": "Browsing",
                "children": [
                    { "text": "Column", "name": "Column-name", "leaf": true }
                ]
            },
            {
                "expanded": true,
                "text": "Index",
                "name": "Index-name",
                "children": [
                    { "text": "Parameters", "name": "a name", "leaf": true }
                ]
            }
        ]


    }
});*/

Ext.define('CtyEditor.view.TreeLeftCol', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.leftcol',

    title: 'Editable components',
    width: 250,
    bodyPadding: 5,
    rootVisible: false,

    fields: ['text', 'name'],
    columns: [{
        xtype: 'treecolumn',
        text: 'Type',
        dataIndex: 'text',
        width: 130
    }, {
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }],

    root: {
        name: 'root',
        //text: 'The root',
        expanded: true,
        children: [{
            expanded: true,
            text: 'Config',
            name: 'Person',
            children: [
                {
                    text: 'Block 1',
                    name: 'Personal Info',
                    expanded: true,
                    children: [
                        {
                            text: 'Text',
                            name: 'last_name',
                            leaf: true
                        }
                    ]
                }
            ]
        },
        {
            expanded: true,
            text: 'Browse',
            children: []
        },
        {
            expanded: true,
            text: 'Index',
            children: []
        }]
    },

    //store: store,
    //store: 'NewCtyMarker',

    initComponent: function () {
       /* this.items = [
            {

            }
        ]*/

        this.callParent(arguments);
    }
});