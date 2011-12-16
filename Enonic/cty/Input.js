/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/28/11
 * Time: 2:53 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Enonic.cty.Input', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'display', type: 'string'},
        {name: 'xpath', type: 'string'},
        {name: 'required', type: 'boolean', defaultValue: false}
    ]
});