/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 12/2/11
 * Time: 3:53 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('CtyEditor.view.RadioOptionRow', {
    extend: 'Ext.container.Container',
    alias: 'widget.radioOptionRow',

    border: 0,
    //height: 27,
    layout: {
        type: 'hbox'
    },
    cls: 'radioRow', // Is this needed?

    margin: '0 0 2 0',

    autoShow: true,

    initComponent: function () {
        var me = this;

        me.items = [

            {
                xtype: 'label',
                width: 10
            },
            {
                xtype: 'radiofield',
                name: 'default-option',
                width: 35
            },
            {
                xtype: 'textfield',
                name: 'radioValue',
                width: 120,
                margin: '0 3 0 0',
                helpText: 'The value will appear in the XML when this option is selected.'
            },
            {
                xtype: 'textfield',
                name: 'radioText',
                width: 120,
                margin: '0 3 0 0',
                helpText: 'This is the label you will see for this radiobutton when editing the content.'
            },
            {
                xtype: 'button',
                //iconCls: 'iconMoveDown',
                icon: 'resources/images/icon_move_down.gif',
                //action: 'moveRadioOption',
                action: 'moveOption',
                moveDir: 1,
                width: 18,
                height: 20,
                margin: '0 3 0 0'
            },
            {
                xtype: 'button',
                icon: 'resources/images/icon_move_up.gif',
                //action: 'moveRadioOption',
                action: 'moveOption',
                moveDir: -1,
                width: 18,
                height: 20,
                margin: '0 3 0 0'
            },
            {
                xtype: 'button',
                icon: 'resources/images/icon_remove.gif',
                //action: 'removeRadioOption',
                action: 'removeOption',
                width: 18,
                height: 20
            }

        ],
        me.callParent(arguments);
    }
});