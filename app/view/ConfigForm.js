/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 2/17/12
 * Time: 4:17 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.ConfigForm', {
    extend: 'Ext.container.Container',
    alias: 'widget.configform',

    //title: 'Edit block configuration',
    autoShow: true,

    /*height: 250,
    width: 300,*/

    layout: 'fit',


    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'form',
                layout: 'anchor',
                bodyPadding: 0,
                border: 0,
                autoScroll: true,
                items: [
                    {
                        xtype: 'fieldset',
                        itemId: 'configForm',
                        title: 'Config values',
                        padding: 10,
                        layout: 'hbox',
                        //height: 60,

                        /*dockedItems: [
                            {
                                xtype: 'panel',
                                itemId: 'helpPanel',
                                border: 0,
                                dock: 'bottom',
                                bodyPadding: 10,
                                height: 75
                            }
                        ],*/
                        items: [
                            {
                                xtype: 'textfield',
                                itemId: 'configNameTextfield',
                                name: 'name',
                                fieldLabel: 'Name<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>',
                                labelWidth: 40,
                                allowBlank: false,
                                blankText: 'The contenttype name is required.',
                                required: true,
                                helpText: 'Enter a name for the contenttype.',
                                margin: '0 5 0 0'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'configTitleTextfield',
                                name: 'title',
                                fieldLabel: 'Title<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>',
                                labelWidth: 35,
                                allowBlank: false,
                                blankText: 'The title is required and must match the name of a required input.',
                                required: true,
                                margin: '0 5 0 0'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'configVersionTextfield',
                                width: 100,
                                name: 'version',
                                fieldLabel: 'Version',
                                labelWidth: 45,
                                helpText: 'The version is optional',
                                margin: '0 5 0 0'
                            },
                            {
                                xtype: 'button',
                                itemId: 'configSubmitButton',
                                text: 'Update'
                            }
                        ]
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

        //console.log(me.testLabel);
    }
});