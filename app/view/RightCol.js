/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/24/11
 * Time: 12:29 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.RightCol', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.rightcol',

    title: 'Controls',
    //padding: 10,
    width: 274,
    autoScroll: true,
    layout: 'anchor',

    initComponent: function () {
        this.items = [
            {
                xtype: 'fieldset',
                layout: 'auto',
                padding: 10,
                margin: 10,
                title: 'Add inputs',
                items: [
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Text',
                        type: 'text',
                        action: 'addInput',
                        helpText: 'A text input is a simple one line input.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Textarea',
                        type: 'textarea',
                        action: 'addInput',
                        helpText: 'A textarea allows multiple lines of unformatted text.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Image',
                        type: 'image',
                        action: 'addInput',
                        helpText: 'An image can be added to your content with this input.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Htmlarea',
                        type: 'htmlarea',
                        action: 'addInput',
                        helpText: 'Formatted text with links and images can be added in an Htmlarea.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'File',
                        type: 'file',
                        action: 'addInput',
                        helpText: 'A file can be added.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Uploadfile',
                        type: 'uploadfile',
                        action: 'addInput',
                        helpText: 'TODO: Helptext for uploadfile.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Date',
                        type: 'date',
                        action: 'addInput',
                        helpText: 'Add a date field to your content. Format is 2011-10-31.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Url',
                        type: 'url',
                        action: 'addInput',
                        helpText: 'Just like a textfield but specifically for URLs.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Radiobutton',
                        type: 'radiobutton',
                        action: 'addInput',
                        helpText: 'Allows several options but only one can be selected. If this input is ' +
                            'marked as required but none of the options are "checked" then the first option will be ' +
                            'selected by default.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Dropdown',
                        type: 'dropdown',
                        action: 'addInput',
                        helpText: 'Dropdowns save space and provide a list of options to choose from.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Checkbox',
                        type: 'checkbox',
                        action: 'addInput',
                        helpText: 'Many options can be selected.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Relatedcontent',
                        type: 'relatedcontent',
                        action: 'addInput',
                        helpText: 'Related content enables you to create relations to other content, such ' +
                            'as related articles, persons etc.'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'XML',
                        type: 'xml',
                        action: 'addInput',
                        helpText: 'Just like a textarea but specially made for XML.'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                layout: 'auto',
                padding: 10,
                margin: 10,
                title: 'Add blocks',
                items: [
                    {
                        xtype: 'button',
                        action: 'addBlock',
                        margin: 3,
                        width: 100,
                        text: 'New block',
                        helpText: 'A block is a set of related inputs within a contenttype.'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                layout: 'auto',
                padding: 10,
                margin: 10,
                title: 'Browse configuration',
                items: [
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Add column'
                    },
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Add template'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                layout: 'auto',
                padding: 10,
                margin: 10,
                title: 'Indexing',
                items: [
                    {
                        xtype: 'button',
                        margin: 3,
                        width: 100,
                        text: 'Add index'
                    }
                ]
            }

        ],

        this.callParent(arguments);
    }
});