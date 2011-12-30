/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 12/30/11
 * Time: 11:05 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.require(['Ext.form.field.VTypes']);
Ext.apply(Ext.form.VTypes, {
    noSpace: function (val, field) {
        return !/\s/g.test(val);
    },
    //noSpaceMask: /a-zA-Z/g,
    noSpaceText: 'No spaces are allowed for this field.'



});
