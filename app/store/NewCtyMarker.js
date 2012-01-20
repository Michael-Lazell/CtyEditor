/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/24/11
 * Time: 1:56 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.store.NewCtyMarker', {
    extend: 'Ext.data.TreeStore',

    //model: 'App.model.NewCty',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/newCtyMarker.json'//,
        /*api: {
            read: 'data/newCtyMarker.json',
            update: 'data/newCtyMarker.json'
        },*/

        /*reader: {
            type: 'json',
            root: 'root',
            successProperty: 'success'
        }*/
    }

});