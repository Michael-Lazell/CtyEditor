/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 12/11/11
 * Time: 2:22 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.DropdownOptionRow', {
    extend: 'Ext.container.Container',
    alias: 'widget.dropdownOptionRow',

    border: 0,
    layout: {
        type: 'hbox'
    },
    margin: '0 0 2 0',

    autoShow: true,
    /*draggable: {
        delegate: '.dragable'
    },*/

    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'textfield',
                name: 'optionValue',
                width: 120,
                margin: '0 3 0 0',
                helpText: 'The value will appear in the XML when this option is selected.'
            },
            {
                xtype: 'textfield',
                name: 'optionText',
                width: 120,
                margin: '0 3 0 0',
                helpText: 'This is the label you will see for this option when editing the content.'
            },
            {
                xtype: 'button',
                //iconCls: 'iconMoveDown',
                icon: 'resources/images/icon_move_down.gif',
                action: 'moveOption',
                moveDir: 1,
                width: 18,
                height: 20,
                margin: '0 3 0 0'
            },
            {
                xtype: 'button',
                icon: 'resources/images/icon_move_up.gif',
                action: 'moveOption',
                moveDir: -1,
                width: 18,
                height: 20,
                margin: '0 3 0 0'
            },
            {
                xtype: 'button',
                icon: 'resources/images/icon_remove.gif',
                action: 'removeOption',
                width: 18,
                height: 20
            }

        ],
        me.callParent(arguments);
    }
});