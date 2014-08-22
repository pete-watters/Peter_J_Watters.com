define([],
function() {
	var app = {}, HeaderLayout = {}, FooterLayout = {}, SocialLayout = {}, AboutLayout = {}, ResumeLayout = {}, PortfolioLayout = {}, CallToActionLayout = {}, ContactLayout = {},
	JST = window.JST = window.JST || {};

	app = new Backbone.Marionette.Application();

	Backbone.Marionette.Renderer.render = function(template, data){
		if (!JST[template]) throw "Template '" + template + "' not found!";
		return JST[template](data);
	};

	HeaderLayout = Backbone.Marionette.LayoutView.extend({
				el : 'header',
				template: "app/templates/page-layout/header-layout.hbs",
			});

	FooterLayout = Backbone.Marionette.LayoutView.extend({
				el : 'footer',
				template: "app/templates/page-layout/footer-layout.hbs",
			});

	SocialLayout = Backbone.Marionette.LayoutView.extend({
				el : '.social',
				template: "app/templates/common-layout/social-layout.hbs",
			});

	/*

	TODO - need to remove all of these unnecessary LayoutViews and replace with Item views.
			 - 1 layout view for entire APP containing multiple ItemViews
			 - figure out where to put models then too!

	*/

	var myModel = new Backbone.Model({name: 'bar'});

	AboutLayout = Backbone.Marionette.ItemView.extend({
				el : '#about',
				template: "app/templates/page-content/about-layout.hbs",
				model : myModel
			});

	ResumeLayout = Backbone.Marionette.LayoutView.extend({
				el : '#resume',
				template: "app/templates/page-content/resume-layout.hbs",
			});

	PortfolioLayout = Backbone.Marionette.LayoutView.extend({
				el : '#portfolio',
				template: "app/templates/page-content/portfolio-layout.hbs",
			});


	CallToActionLayout = Backbone.Marionette.LayoutView.extend({
				el : '#call-to-action',
				template: "app/templates/page-content/call-to-action-layout.hbs",
			});

	ContactLayout = Backbone.Marionette.LayoutView.extend({
				el : '#contact',
				template: "app/templates/page-content/contact-layout.hbs",
			});

	headerLayout = new HeaderLayout();
	headerLayout.render();

	footerLayout = new FooterLayout();
	footerLayout.render();

	socialLayout = new SocialLayout();
	socialLayout.render();

	aboutLayout = new AboutLayout();
	aboutLayout.render([{name:'billy'}]);

	resumeLayout = new ResumeLayout();
	resumeLayout.render();

	portfolioLayout = new PortfolioLayout();
	portfolioLayout.render();

	calltoactionLayout = new CallToActionLayout();
	calltoactionLayout.render();

	contactLayout = new ContactLayout();
	contactLayout.render();

	return app;
});
