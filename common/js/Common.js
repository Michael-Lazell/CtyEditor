Ext.define('Common.Common', {
    //name: 'Unknown',
    //food: 'first',

    config: {
        name: 'Config name',
        food: 'config food'
    },

    constructor: function(config) {
        this.initConfig(config);

        return this;
    },
    /*getName: function() {
        return this.name;
    }*/
    eat: function() {
        alert("I'm eating: " + this.food);

        return this;
    }
});