define([],
function() {
	var app = {}, MainLayout = {}, AboutLayout = {}, ResumeLayout = {}, PortfolioLayout = {}, CallToActionLayout = {}, TestimonialsLayout = {}, ContactLayout = {},
	JST = window.JST = window.JST || {};

	app = new Backbone.Marionette.Application();

	Backbone.Marionette.Renderer.render = function(template, data){
		if (!JST[template]) throw "Template '" + template + "' not found!";
		return JST[template](data);
	};

	MainLayout = Backbone.Marionette.LayoutView.extend({
				el : '#main',
				template: "app/templates/main-layout.hbs",
			});

	AboutLayout = Backbone.Marionette.LayoutView.extend({
				el : '#about',
				template: "app/templates/about-layout.hbs",
			});

	ResumeLayout = Backbone.Marionette.LayoutView.extend({
				el : '#resume',
				template: "app/templates/resume-layout.hbs",
			});

	PortfolioLayout = Backbone.Marionette.LayoutView.extend({
				el : '#portfolio',
				template: "app/templates/portfolio-layout.hbs",
			});


	CallToActionLayout = Backbone.Marionette.LayoutView.extend({
				el : '#call-to-action',
				template: "app/templates/call-to-action-layout.hbs",
			});
	/* Testimonials not rendering when loaded from template - needs work */
	/*
	TestimonialsLayout = Backbone.Marionette.LayoutView.extend({
				el : '#testimonial-slides',
				template: "app/templates/testimonials-layout.hbs",
			});
	*/

	ContactLayout = Backbone.Marionette.LayoutView.extend({
				el : '#contact',
				template: "app/templates/contact-layout.hbs",
			});


	mainLayout = new MainLayout();
	mainLayout.render();

	aboutLayout = new AboutLayout();
	aboutLayout.render();

	resumeLayout = new ResumeLayout();
	resumeLayout.render();

	portfolioLayout = new PortfolioLayout();
	portfolioLayout.render();

	calltoactionLayout = new CallToActionLayout();
	calltoactionLayout.render();

	//testimonialsLayout = new TestimonialsLayout();
	//testimonialsLayout.render();

	contactLayout = new ContactLayout();
	contactLayout.render();

	return app;
});
