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
    bodyPadding: 5,
    html: 'Testing',

    initComponent: function () {


        this.callParent(arguments);
    }
});