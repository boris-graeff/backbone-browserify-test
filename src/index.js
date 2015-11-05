var Router = require('./router'),
    Backbone = require('backbone'),
    $ = require('jquery');

$(document).ready(function () {
    Backbone.$ = $;
    this.router = new Router();
    Backbone.history.start();
});