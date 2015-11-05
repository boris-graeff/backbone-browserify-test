var Backbone = require('backbone');
var HomeView = require('./home/homeView');
var ResultView = require('./result/resultView');

var Router = Backbone.Router.extend({

    initialize : function(){

    },

    routes: {
        "search/:city" : "search",  // Ex : #search/Bayonne,
        '*path'        : 'home'     // Default
    },

    search: function(city) {
        this.resultView = new ResultView(city);
    },

    home : function(path){
        this.homeView = new HomeView(this);
        this.listenTo(this.homeView, HomeView.EVENT_SEARCH, function(city){
            this.navigate('search/'+city, {trigger: true});
        });
    }

});

module.exports = Router;