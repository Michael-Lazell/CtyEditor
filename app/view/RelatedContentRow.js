/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 12/10/11
 * Time: 9:13 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('CtyEditor.view.RelatedContentRow', {
    extend: 'Ext.container.Container',
    alias: 'widget.relatedContentRow',

    border: 0,
    height: 27,
    width: 300,
    layout: {
        type: 'hbox'
    },

    margin: 0,

    autoShow: true,

    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'label',
                text: 'Contenttype:',
                width: 100,
                margin: '0 5 0 0'
            },
            {
                xtype: 'textfield',
                //height: 27,
                width: 150,
                margin: '0 5 0 0',
                helpText: 'Restricts the types of related content. There are no contenttype restrictions if this is blank.'

            },
            {
                xtype: 'button',
                icon: 'resources/images/icon_remove.gif',
                action: 'removeRelatedContenttype',
                width: 18,
                height: 20
            }

        ],
        me.callParent(arguments);
    }
});