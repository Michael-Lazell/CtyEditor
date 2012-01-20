/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/24/11
 * Time: 2:02 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('App.model.NewCty', {
    extend: 'Ext.data.Model',
    //implement: 'Ext.data.NodeInterface', // ?

    fields: [
        {name: 'text', type: 'string'},
        {name: 'name', type: 'string'}
    ]
});