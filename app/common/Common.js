Ext.define('common.Common', {
     name: 'Unknown',

     constructor: function(name) {
         if (name) {
             this.name = name;
         }

         return this;
     },

     eat: function(foodType) {
         alert("I'm eating: " + foodType);

         return this;
     }
});