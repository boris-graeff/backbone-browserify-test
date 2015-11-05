var Backbone = require('backbone');
var $ = require('jquery');
var Router = require('../router'),
    template = require('./home.hbs');

var HomeView = Backbone.View.extend({

    events: {
        'click #doSearch' : 'doSearch'
    },

    initialize: function(options){
        this.render();
    },

    render: function(){

        this.$el.html(template());
        $("#content").html(this.$el);

        return this;
    },

    doSearch: function(){
        var city = $("#city").val();
        if(city){
            this.trigger(HomeView.EVENT_SEARCH, city);
        }
    }
},{
    EVENT_SEARCH : 'EVENT_SEARCH'
});

module.exports = HomeView;