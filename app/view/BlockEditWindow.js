/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/29/11
 * Time: 5:23 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.apply('Ext.form.field.VTypes', {
    noSpace: function (val, field) {
        return !/\s/g.test(val);
    },
    noSpaceText: 'No spaces are allowed for this field.'
});
Ext.define('CtyEditor.view.BlockEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.blockedit',

    title: 'Edit block configuration',
    autoShow: true,

    height: 250,
    width: 300,

    layout: 'fit',

    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'form',
                itemId: 'blockEditFormPanel',
                bodyPadding: 10,
                border: 0,
                autoScroll: true,

                dockedItems: [
                    {
                        xtype: 'panel',
                        itemId: 'helpPanel',
                        border: 0,
                        dock: 'bottom',
                        bodyPadding: 10,
                        height: 75
                    }
                ],
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'blockNameTextfield',
                        name: 'name',
                        fieldLabel: 'Name<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>',
                        allowBlank: false,
                        blankText: 'The block name is required.',
                        required: true,
                        helpText: 'The block name should describe the information for this part of the content.'
                    },
                    {
                        xtype: 'textfield',
                        name: 'group',
                        itemId: 'blockGroupTextfield',
                        vtype: 'noSpace',
                        fieldLabel: 'Group',
                        helpText: 'Setting a group value allows you to repeat the block with the same inputs within ' +
                            'your content. Example: contentdata/images'
                    }
                ]
            }

        ];

        me.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];
        
        me.callParent(arguments);
    }
});