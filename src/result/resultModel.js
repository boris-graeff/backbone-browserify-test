var Backbone = require('backbone'),
    config = require('../config');

var ResultModel = Backbone.Model.extend({

    defaults : {
        country : 'fr',
        city    : ''
    },

    urlRoot : 'http://api.openweathermap.org/data/2.5/weather?q=',

    initialize : function(city){
        this.set('city', city);
    },

    url: function(){
        return this.urlRoot
            +this.get('city')
            +'&units='+config.openWeatherMapAPI.units
            +'&APPID='+config.openWeatherMapAPI.apiKey;
    }

});

module.exports = ResultModel;