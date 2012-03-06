/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 1/20/12
 * Time: 1:16 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.view.MarkerContextMenu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.markerContextMenu',

    items: [
        {
            text: 'Edit',
            iconCls: 'icon-edit',
            action: 'edit'
        },
        {
            text: 'Delete',
            iconCls: 'icon-delete',
            action: 'deleteNode'
        }
    ]
});