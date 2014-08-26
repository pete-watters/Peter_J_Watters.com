define([],
function() {
	var app = {}, HeaderView = {}, FooterView = {},SocialView = {}, AboutView = {}, ResumeView = {},PortfolioView = {}, ContactView = {},JST = window.JST = window.JST || {};

	app = new Backbone.Marionette.Application();

	Backbone.Marionette.Renderer.render = function(template, data){
		if (!JST[template]) throw "Template '" + template + "' not found!";
		return JST[template](data);
	};


	/*	Models and collections*/
	var SocialModel = Backbone.Model.extend();
	var SocialCollection = Backbone.Collection.extend({ model: SocialModel });

	var socialCollection = new SocialCollection([
					new SocialModel({ site: 'Twitter' , icon: 'fa-twitter' , link: 'https://twitter.com/Peter_J_W'}),
					new SocialModel({ site: 'Facebook', icon: 'fa-facebook' , link: 'https://www.facebook.com/pete.watters.77'}),
					new SocialModel({ site: 'LinkedIn', icon: 'fa-linkedin' , link: 'http://ie.linkedin.com/pub/peter-watters/31/8a/7a3/'}),
					new SocialModel({ site: 'Tumblr' , icon: 'fa-tumblr' , link: 'http://peterwatters.tumblr.com/'}),
					new SocialModel({ site: 'Flickr' , icon: 'fa-flickr' , link: 'https://www.flickr.com/photos/96013078@N03/'}),
					new SocialModel({ site: 'Github' , icon: 'fa-github' , link: 'https://github.com/peter-watters'}),
					new SocialModel({ site: 'Stack Overflow' , icon: 'fa-stack-overflow' , link: 'http://stackoverflow.com/users/1365580/peadar'})
					]);

	var AboutModel = new Backbone.Model({
											name: 'Peter Watters',
											description: '<p>I am fully qualified and chartered engineer who is working as a Web Application developer and UX specialist. I have keen interest in developing rich internet applciations using HTML, CSS and Javascript. My goal is to produce applications that look awesome but also have an intuitive user experience and are fully accessible to all users.</p><p> Outside of my day job my main interests include football, fitness, motorcycles and music. Football is my main passion in which I operate primarily as a winger / wing back. I really enjoy keeping fit and am currently trying to master calisthenics. I also love music and play electric guitar.</p>',
											contact : 'My preferred method of contact is email and you can reach me at: <br><span>peter@peterjwatters.com</span>',
											resume_link : 'file.pdf'
										});

	ResumeModel = Backbone.Model.extend({});
	ResumeCollection = Backbone.Collection.extend({ model: ResumeModel});

	var resume = new ResumeCollection([
			new ResumeModel({ name: 'Wet Cat', image_path: 'assets/images/cat2.jpg' }),
			new ResumeModel({ name: 'Bitey Cat', image_path: 'assets/images/cat1.jpg' }),
			new ResumeModel({ name: 'Surprised Cat', image_path: 'assets/images/cat3.jpg' })
	]);

	var PortfolioModel = Backbone.Model.extend({});
	var PortfolioCollection = Backbone.Collection.extend({ model: PortfolioModel });

	var portfolioCollection = new PortfolioCollection([
			new PortfolioModel({ title : 'Coffee' , description_short : 'Illustration', image : 'bower_components/ceevee/images/portfolio/coffee.jpg', modal_id : 'modal-01' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign' , demo_link : 'http://www.google.com'}),
			new PortfolioModel({ title : 'Coffee' , description_short : 'Illustration', image : 'bower_components/ceevee/images/portfolio/coffee.jpg', modal_id : 'modal-02' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			new PortfolioModel({ title : 'Coffee' , description_short : 'Illustration', image : 'bower_components/ceevee/images/portfolio/coffee.jpg', modal_id : 'modal-03' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			new PortfolioModel({ title : 'Coffee' , description_short : 'Illustration', image : 'bower_components/ceevee/images/portfolio/coffee.jpg', modal_id : 'modal-04' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'})
		]);


	/*	View init */

	HeaderView = Backbone.Marionette.ItemView.extend({
				el : 'header',
				template: "app/templates/page-layout/header-view.hbs",
			});

	FooterView = Backbone.Marionette.ItemView.extend({
				el : 'footer',
				template: "app/templates/page-layout/footer-view.hbs",
			});
	SocialView = Backbone.Marionette.ItemView.extend({
				el : '.social',
				template: "app/templates/common-layout/social-view.hbs",
				model: socialCollection
			});
	AboutView = Backbone.Marionette.ItemView.extend({
				el : '#about',
				template: "app/templates/page-content/about-view.hbs",
				model : AboutModel
			});
	ResumeView = Backbone.Marionette.ItemView.extend({
				el : '#resume',
				template: "app/templates/page-content/resume-view.hbs",
				tagName: 'li',
				model: resume
			});
	PortfolioView = Backbone.Marionette.ItemView.extend({
				el : '#portfolio',
				template: "app/templates/page-content/portfolio-view.hbs",
				model: portfolioCollection
			});

	ContactView = Backbone.Marionette.ItemView.extend({
				el : '#contact',
				template: "app/templates/page-content/contact-view.hbs",
			});

	/*	View render */
	headerView = new HeaderView();
	headerView.render();

	footerView = new FooterView();
	footerView.render();

	socialView = new SocialView();
	socialView.render();

	aboutView = new AboutView();
	aboutView.render();

	resumeView = new ResumeView();
	resumeView.render();

	portfolioView = new PortfolioView();
	portfolioView.render();

	contactView = new ContactView();
	contactView.render();

	/* Document ready stuff taken from init */

	setTimeout(function() {
		$('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	}, 100);
	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
		$('.item-wrap a').magnificPopup({
			type:'inline',
			fixedContentPos: false,
			removalDelay: 200,
			showCloseBtn: false,
			mainClass: 'mfp-fade'
		});

		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});

		/* smoothly scroll to links */
		$('.smoothscroll').on('click',function (e) {
			e.preventDefault();
			var target = this.hash,

			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
				}, 800, 'swing', function () {
				window.location.hash = target;
			});
		});

	/*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
	------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		},
		offset: '35%'
	});


	/*----------------------------------------------------*/
	/*	Make sure that #header-background-image height is
	/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() });
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
		var nav = $('#nav-wrap');

	if ( (y > h*0.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
			nav.fadeOut('fast');
		}
      else {
		if (y < h*0.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }
	});

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/
$('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').text();
      var contactEmail = $('#contactForm #contactEmail').text();
      var contactSubject = $('#contactForm #contactSubject').text();
      var contactMessage = $('#contactForm #contactMessage').text();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({
		type: "POST",
		url: "inc/sendEmail.php",
		data: data,
		success: function(msg) {
            // Message was sent
            if (msg == 'OK') {
				$('#image-loader').fadeOut();
				$('#message-warning').hide();
				$('#contactForm').fadeOut();
				$('#message-success').fadeIn();
            }
            // There was an error
            else {
				$('#image-loader').fadeOut();
				$('#message-warning').html(msg);
				$('#message-warning').fadeIn();
            }
        }
		});
      return false;
   });


	return app;
});
