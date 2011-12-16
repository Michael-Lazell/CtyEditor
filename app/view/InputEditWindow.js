/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/29/11
 * Time: 7:52 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.apply('Ext.form.field.VTypes', {
    noSpace: function (val, field) {
        return !/\s/g.test(val);
    },
    noSpaceText: 'No spaces are allowed for this field.'
});
var configOptions = Ext.create('Ext.data.Store', {
    fields: ['name', 'value'],
    data: [
        {"name": "document", "value": "document"},
        {"name": "light", "value": "light"},
        {"name": "lightwithtable", "value": "lightwithtable"},
        {"name": "custom", "value": "custom"},
        {"name": "empty", "value": "empty"}
    ]
});
Ext.define('CtyEditor.view.InputEditWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.inputEdit',

    config: {
        type: 'default'
    },

    title: 'Edit text input',
    autoShow: true,

    layout: 'fit',
    width: 310,
    height: 520,


    inputReadonly: {
        xtype: 'checkbox',
        itemId: 'inputReadonly',
        fieldLabel: 'Read only',
        helpText: 'All content will have the default value for this input and it cannot be edited.'
    },
    inputValidate: {
        xtype: 'textfield',
        itemId: 'inputValidate',
        fieldLabel: 'Validate',
        helpText: 'Use this if you need to validate the input.'
    },
    inputRegexp: {
        xtype: 'textfield',
        itemId: 'inputRegexp',
        fieldLabel: 'Regexp',
        helpText: 'Enter a regular expression to limit the format of text that can be submitted.'
    },
    inputSize: {
        xtype: 'numberfield',
        itemId: 'inputSize',
        fieldLabel: 'Size',
        minValue: 1,
        helpText: 'Controls the width of the input by number of characters. The default is 60 if left blank.'
    },
    inputMaxLength: {
        xtype: 'numberfield',
        itemId: 'inputMaxLength',
        fieldLabel: 'Maximum length',
        minValue: 1,
        helpText: 'Limit the number of characters that can be submitted.'
    },
    inputDefault: {
        xtype: 'textfield',
        itemId: 'inputDefault',
        fieldLabel: 'Default value',
        helpText: 'Enter a default value for this input.'
    },
    inputCols: {
        xtype: 'numberfield',
        itemId: 'inputColsVal',
        fieldLabel: 'Cols (width)',
        minValue: 1,
        helpText: 'The number of characters desired for the field width. Defaults to 60 if left blank.'
    },
    inputRows: {
        xtype: 'numberfield',
        itemId: 'inputRowsVal',
        fieldLabel: 'Rows (height)',
        minValue: 1,
        helpText: 'The number of vertical rows of text for the field. Defaults to 10 if left blank.'
    },
    inputBlockFormatElements:  {
        xtype: 'textfield',
        itemId: 'inputBlockFormatElements',
        fieldLabel: 'Format elements',
        helpText: '<p>Determines which block elements will be available when editing the htmlarea.</p>' +
            '<p>The options are:</p><p>h1, h2, h3, h4, h5, h6, blockquote, pre</p><p>These should be entered ' +
            ' in a comma separated list. If left blank, all options are available.</p>'
    },
    inputMode: {
        xtype: 'radiogroup',
        itemId: 'modeRadiogroup',
        fieldLabel: 'Mode<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>',
        items: [
            {
                xtype: 'radiofield',
                boxLabel: 'xhtml',
                name: 'mode',
                helpText: 'Mode tells whether to store as xhtml or cdata. Cdata is faster but less flexible.' +
                    ' Xhtml can be transformed by xslt. Use only cdata for special purposes. When mode=xhtml, ' +
                    'the xhtml document will be encapsulated by a document tag in the xml for simpler processing.',
                checked: true
            },
            {
                xtype: 'radiofield',
                boxLabel: 'cdata',
                name: 'mode'
            }
        ]
    },
    inputWidth: {
        xtype: 'numberfield',
        itemId: 'inputWidth',
        fieldLabel: 'Width',
        minValue: 1,
        helpText: 'Width in pixels for the editable area.'
    },
    inputHeight: {
        xtype: 'numberfield',
        itemId: 'inputHeight',
        fieldLabel: 'Height',
        minValue: 1,
        helpText: 'Height in pixels for the editable area.'
    },
    inputConfig: {
        xtype: 'combobox',
        itemId: 'inputConfig',
        fieldLabel: 'Config',
        queryMode: 'local',
        displayField: 'name',
        valueField: 'value',
        store: configOptions,
        forceSelection: true,
        helpText: 'The config option determines the available buttons for your editor. If the config ' +
            'attribute is not set, document will be used. By choosing the custom configuration - you ' +
            'may define your own set of buttons.'
    },
    inputButtons: {
        xtype: 'textfield',
        itemId: 'inputButtons',
        fieldLabel: 'Buttons',
        disabled: true,
        helpText: 'Determines what formatting options are available when "custom" is selected as the ' +
            'config option. The options are: textformat, phrase, table, tablecontrols, alignment, ' +
            'indent, hyperlink, list, subsup, edit, history, searchreplace, separator, |, image, ' +
            'attribute, charmap, hr, removeformat, blockformat, color, styleselct, and embed OR media.'
    },
    inputMultiple: {
        xtype: 'checkbox',
        itemId: 'inputMultiple',
        fieldLabel: 'Multiple',
        helpText: 'Enables multiple related contents to be added.'
    },

    formHelpLabel: { xtype: 'label', itemId: 'helpLabel' },

    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'form',
                itemId: 'inputFormPanel',
                bodyPadding: 10,
                border: 0,
                autoScroll: true,
                /*tpl: new Ext.XTemplate(Templates.ctyEditor.helpInput, {

                }),*/
                dockedItems: [
                    {
                        xtype: 'panel',
                        itemId: 'helpPanel',
                        border: 0,
                        dock: 'bottom',
                        bodyPadding: 10,
                        height: 100
                    }
                ],
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'inputDisplay',
                        fieldLabel: 'Display text<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>',
                        allowBlank: false,
                        blankText: 'The display text is required.',
                        helpText: 'This is the label you will see when editing the content.',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'inputName',
                        fieldLabel: 'Input name<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>',
                        allowBlank: false,
                        blankText: 'The input name is required',
                        vtype: 'noSpace',
                        helpText: 'Required: Must be a unique alphanumeric sequence with no spaces',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'inputXpath',
                        fieldLabel: 'Xpath<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>',
                        allowBlank: false,
                        blankText: 'The XPATH is required',
                        vtype: 'noSpace',
                        helpText: 'The XPATH should not be changed from the default setting unless there is a very good reason.',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'inputHelp',
                        fieldLabel: 'Help text',
                        helpText: 'Optional note or instructions for the people who will be creating content.'
                    },
                    {
                        xtype: 'checkbox',
                        itemId: 'inputRequired',
                        fieldLabel: 'Required',
                        helpText: 'You can make this input a required field for the content.'
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
    },

    // Will be called after an AddInput button is clicked and before the window is displayed
    configureInputType: function (button) {
        var formPanel = this.down('#inputFormPanel');
        var me = this;
        switch(button.type) {
            case 'text':
                this.setTitle('Edit text input');
                formPanel.add([this.inputReadonly, this.inputValidate, this.inputRegexp, this.inputSize,
                    this.inputMaxLength, this.inputDefault,  this.formHelpLabel ]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(450);
                break;
            case 'textarea':
                this.setTitle('Edit textarea input');
                formPanel.add([this.inputReadonly, this.inputCols, this.inputRows, this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(360);
                break;
            case 'image':
                formPanel.add([this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(280);
                this.setTitle('Edit image input');
                break;
            case 'htmlarea':
                this.setTitle('Edit htmlarea input');
                formPanel.add([this.inputReadonly, this.inputMode, this.inputBlockFormatElements, this.inputConfig,
                    this.inputButtons, this.inputWidth, this.inputHeight, this.formHelpLabel]);
                this.down('#inputButtons').hide();
                this.down('#helpPanel').setHeight(140);
                this.setHeight(560);
                break;
            case 'file':
                this.setTitle('Edit file input');
                formPanel.add([this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(280);
                break;
            case 'uploadfile':
                this.setTitle('Edit uploadfile input');
                formPanel.add([this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(280);
                break;
            case 'date':
                this.setTitle('Edit date input');
                formPanel.add([this.inputReadonly, this.inputDefault, this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(340);
                break;
            case 'url':
                this.setTitle('Edit URL input');
                formPanel.add([this.inputReadonly, this.inputSize, this.inputMaxLength, this.inputDefault, this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(390);
                break;
            case 'radiobutton':
                this.setTitle('Edit radiobutton input');
                this.setWidth(410);
                formPanel.add(
                    [
                        this.formHelpLabel,
                        {
                            xtype: 'container',
                            height: 20,
                            items: [
                                {
                                    xtype: 'label',
                                    height: 20,
                                    text: 'Options:'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            itemId: 'radioContainer',
                            optionRowXtype: '.radioOptionRow',
                            hasMovers: true,
                            border: 0,
                            height: 77,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    height: 20,
                                    items: [
                                        {
                                            xtype: 'label',
                                            text: 'Default',
                                            width: 45
                                        },
                                        {
                                            xtype: 'label',
                                            text: 'Value',
                                            width: 125
                                        },
                                        {
                                            xtype: 'label',
                                            text: 'Display',
                                            width: 125
                                        },
                                        {
                                            xtype: 'label',
                                            text: 'Position'
                                        }
                                    ]
                                }
                            ]

                        },
                        {
                            xtype: 'container',
                            height: 25,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Remove default',
                                    action: 'removeDefaultRadio',
                                    margin: '0 102 0 0'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Add row',
                                    icon: 'resources/images/icon_plus.gif',
                                    itemId: 'addOption',
                                    optionContainer: '#radioContainer',
                                    optionRow: 'radioOptionRow'
                                }
                            ]
                        }
                    ]
                );
                var container = this.down('#radioContainer');
                container.add([{xtype: 'radioOptionRow'},{xtype: 'radioOptionRow'}]);
                container.doLayout();
                break;
            case 'dropdown':
                //TODO: Implement filling out the form with existing data
                this.setTitle('Edit dropdown input');
                this.setWidth(380);
                formPanel.add(
                    [
                        this.formHelpLabel,
                        {
                            xtype: 'container',
                            height: 20,
                            items: [
                                {
                                    xtype: 'label',
                                    height: 20,
                                    text: 'Options:'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            itemId: 'dropdownOptionContainer',
                            optionRowXtype: '.dropdownOptionRow',
                            hasMovers: true,
                            height: 77,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    height: 20,
                                    items: [
                                        
                                        {
                                            xtype: 'label',
                                            text: 'Value',
                                            width: 125
                                        },
                                        {
                                            xtype: 'label',
                                            text: 'Display',
                                            width: 125
                                        },
                                        {
                                            xtype: 'label',
                                            text: 'Position'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 25,
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Add option',
                                    icon: 'resources/images/icon_plus.gif',
                                    itemId: 'addOption',
                                    optionContainer: '#dropdownOptionContainer',
                                    optionRow: 'dropdownOptionRow'
                                }
                            ]
                        }
                    ]
                );
                var container = this.down('#dropdownOptionContainer');
                container.add([{xtype: 'dropdownOptionRow'},{xtype: 'dropdownOptionRow'}]);
                container.doLayout();
                break;
            case 'checkbox':
                this.setTitle('Edit checkbox input');
                this.down('#attrRequired').destroy();
                formPanel.add([this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(270);
                break;
            case 'relatedcontent':
                //TODO: Implement the ability to load form with values from existing input
                this.setTitle('Edit relatedcontent input');
                this.setWidth(350);
                formPanel.add(
                    [
                        this.inputReadonly,
                        this.inputMultiple,
                        this.formHelpLabel,
                        {
                            xtype: 'container',
                            itemId: 'contenttypeRowContainer',
                            layout: 'vbox',
                            height: 65,
                            width: 300,
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Allowed contenttypes',
                                    height: 27,
                                    margin: '5 0 0 0'
                                },
                                {
                                    xtype: 'relatedContentRow'
                                }

                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Add contenttype',
                            icon: 'resources/images/icon_plus.gif',
                            itemId: 'addRelatedContenttype'
                        }
                    ]
                );

                break;
            case 'xml':
                this.setTitle('Edit XML input');
                formPanel.add([this.inputReadonly, this.inputCols, this.inputRows, this.formHelpLabel]);
                this.down('#helpPanel').setHeight(55);
                this.setHeight(360);
                break;
        }
        var i = 0;

        /*while(me.down('#inputFormPanel').items.items[i]){
            console.log( me.down('#inputFormPanel').items.items[i]);
            var field = me.down('#inputFormPanel').items.items[i];
            if(field.required === true && (field.fieldLabel != undefined)){
                field.fieldLabel += '<span style=\"color:red;\" ext:qtip=\"This field is required\">*</span>';
            }
            i++;
        }*/

    }

});
