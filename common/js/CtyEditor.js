/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 1/20/12
 * Time: 11:52 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Common.CtyEditor', {
    /*currentBlock: '0',
    currentInput: '0',*/
    singleton: true,

    config: {
        currentBlock: 0,
        currentInput: 0
    },

    constructor: function(config) {
        this.initConfig(config);

        return this;
    },

    saveBlock: function(block) {
        Ext.Msg.alert('INFO', 'Not implemented yet');
    },

    addInput: function(node) {
        alert("Adding the input" + this.currentBlock);

        return this;
    }
});