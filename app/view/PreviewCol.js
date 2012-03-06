/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/24/11
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.PreviewCol', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.previewcol',

    region: 'center',
    title: 'Preview',
    //border: 5,
    bodyPadding: 10,
    autoScroll: true,
    layout: 'anchor',
    //html: 'Testing',

    initComponent: function () {

        this.items = [
            {
                xtype: 'configform',
                layout: 'anchor'//,
                //anchor: '100%'
            },
            {
                xtype: 'fieldset',
                title: 'Testing this stuff',
                width: 300
            }
        ]


        this.callParent(arguments);
    }
});