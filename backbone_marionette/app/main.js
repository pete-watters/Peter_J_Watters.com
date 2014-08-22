require.config({
	baseUrl: "app",
    paths: {
		'router'				: 'router',
		'app'					: 'app',
		'templates'				: '../build/templates',
		'jquery'				: '../bower_components/jquery/dist/jquery',
		'backbone'				: '../bower_components/backbone/backbone',
		'underscore'			: '../bower_components/lodash/dist/lodash',
		'marionette'			: '../bower_components/marionette/lib/core/backbone.marionette',
		'backbone.babysitter'	: '../bower_components/backbone.babysitter/lib/backbone.babysitter',
		'backbone.wreqr'		: '../bower_components/backbone.wreqr/lib/backbone.wreqr',
		'bootstrap'				: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
		'handlebars'			: '../bower_components/handlebars/handlebars',
		'jquery_flexslider'		: '../bower_components/ceevee/js/jquery.flexslider',
		'ceevee_waypoints'		: '../bower_components/ceevee/js/waypoints',
		'jquery_fittext'		: '../bower_components/ceevee/js/jquery.fittext',
		'ceevee_popup'			: '../bower_components/ceevee/js/magnific-popup',
		'ceevee_init'			: '../bower_components/ceevee/js/init',
	},


	shim : {
		jquery : {
			exports : 'jQuery'
		},
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : ['jquery', 'underscore'],
			exports : 'Backbone'
		},
		marionette : {
			deps : ['jquery', 'underscore', 'backbone'],
			exports : 'Marionette'
		},
		bootstrap : {
			deps : ['jquery'],
		},
		app : {
			deps : ['jquery', 'underscore', 'backbone', 'marionette'],
		},
		router : {
			deps : ['app'],
		},
		templates : {
			deps : ['handlebars']}
		},
});

require([
	"jquery",
	"backbone",
	"underscore",
	"marionette",
	"app",
	"router",
	"templates",
	"handlebars",
	"bootstrap",
	"jquery_flexslider",
	"ceevee_waypoints",
	"jquery_fittext",
	"ceevee_popup" ,
	"ceevee_init"
],
function(jquery, backbone, underscore, marionette, jquery_flexslider, ceevee_waypoints, jquery_fittext, ceevee_popup , ceevee_init, app, router) {
    Backbone.history.start({ pushState: true });
});
