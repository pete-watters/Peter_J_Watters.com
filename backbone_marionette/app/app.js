define([],
function() {
	var app = {}, HeaderView = {}, FooterView = {}, SocialView = {}, AboutView = {}, EducationView = {}, WorkView = {}, SkillsView = {},PortfolioView = {}, ContactView = {},JST = window.JST = window.JST || {};

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
											contact : 'My preferred method of contact is email and you can reach me at: <a href="mailto:peter@peterjwatters.com" target="_top">peter@peterjwatters.com</a>',
											resume_link : 'file.pdf'
										});

	EducationModel = Backbone.Model.extend({});
	EducationCollection = Backbone.Collection.extend({ model: EducationModel});

	var education = new EducationCollection([
			new EducationModel( {institution:"Dublin City University", qualification:"M.Eng in Telecommunications Engineering", date:"2007 - 2010", description:"Masters degree, Telecommunications Engineering majoring in Network Communication, 2.1 "}),
			new EducationModel( {institution:"Dublin City University", qualification:"B.Eng in Digital Media Engineering", date:"April 2007", description:"The course covered a wide range of computer science topics including software programming, information retrieval, web design & development, telecommunications, signal processing, computer graphics, system administration and network security."})
	]);

	var WorkModel = Backbone.Model.extend({});
	var WorkCollection = Backbone.Collection.extend({ model: WorkModel});

	var work = new WorkCollection([
			new WorkModel( {company:"Kontainers", role:"Full stack developer", date:"June 2015 - present", description:"I am working as a Product Developer at Kontainers, acting as a front end specialist but working on all aspects of the product over the full software stack. I gained experience working with Ember, Node, Ruby and Ruby on Rails whilst continually improving on my core skillset and as a software engineer. Kontainers is an up and coming start-up so it is a very hands-on role and during my time there I worked on all areas of the application helping become more fully rounded in my skill set and professional in my programming. Automation and TDD are at the heart of their core goals and I improved a lot as a developer with help from the CTO and software architect."}),
			new WorkModel( {company:"Fidelity Investments", role:"Senior UX Developer / Development lead (CONTRACT)", date:"June 2014 - June 2015", description:"My role at Fidelity was as part of the UX team and involved acting as a consultant during the design process and as a front end development specialist responsible for turning visual designs into fully functional prototype applications. On one of my projects there I acted as a senior tech lead for a team of offshore developers and travelled to India in January 2015 to give training and work with the teams there directly. During my time at Fidelity I gained more experience with current modern front end technologies: Ember, Backbone-Marionette, SASS, Grunt, Foundation, Bower, Node, Yeoman. I was a valued team and organisation member and acted as UX dev lead and technical consultant during interviews for many parts of the organisation. I also acted as front end consultant during an Enterprise Ireland R&D accreditation process for one of the projects I was involved in."}),
			new WorkModel( {company:"Yahoo", role:"Ad Technology Producer", date:"April 2013 - June 2014", description:"At Yahoo I acted as a JS expert and consultant and worked on several high impact including acceptance of new ad technologies and assessing the impact of AdBlocking software on Yahoo revenue. I gained experience working on high traffic websites during my time there and up-skilled in the field of online advertising and project management. I was the agile scrum master of Tech Ops R&D projects and in charge of maintenance/ development of internal tools(using Bash / JS & HTML / Java). I was a senior team member and responsible for mentoring my colleagues and helping their career development and  I gave a lot of training to the Ad Operations teams. I was the main point of contact for the premium ad serving platform in the EMEA region often worked liaising with teams around the world in a war-room environment to ensure critical issues were resolved quickly and with minimal impact to revenue."}),
			new WorkModel( {company:"eSpatial", role:"UI-Developer / UX Designer", date:"March 2012 – April 2013 (1 year 2 months)", description:"I worked as a UI /UX developer for eSpatial and was part of a team responsible for designing and developing the flagship GIS product. The main technologies I used were Javascript, HTML5, CSS3 and several Javascript libraries such as jQuery and OpenLayers.I gained valuable UX experience producing detailed wireframes and mock-ups using Balsamiq and then seeing them through to front end code. I have a strong interest in usability and accessibility of applications and I helped to make several improvements to the usability of the product. I was innovative during my time there and pushed for the first ever mobile version of the product by designing and implementing a responsive version using jQuery Mobile. I also lent my expertise as a consultant to the marketing team, helping them improve the company website, geo-target customers, salesforce integration and google analytics setup."}),
			new WorkModel( {company:"The Now Factory", role:"Operations Engineer / Software Developer", date:"February 2010 - March 2012", description:"My time at The NOW Factory (TNF) was split between development work on internal and external projects and also with operations and support tasks. I quickly became a senior team member I was involved in the hiring process as the technical lead on many interviews. The development projects I worked on included a J2EE based server performance monitoring application using JSP’s, HTML5, jQuery UI and MySQL, a PHP based alarming system to store Nagios alerts in a MySQL database and displays alarms on a TV dashboard and the design and development of a customer facing GUI integrating Nagios, Munin and bespoke scripts to monitor server performance. In operations, my role and responsibilities included administration of high-end Unix servers, programmatic automation of tasks and travelling to data centres to install equipment/ software / meet with clients and provide training."}),
			new WorkModel( {company:"Ocuco", role:"Technical Support Engineer/ Web developer", date:"May 2008 – February 2010", description:"During my time at Ocuco I became the Lead Pharmaceutical software(Integra) technical support engineer.  I also took on the role of Webmaster for the company and was in charge of developing and maintaining their suite of websites and intranet. I also designed and optimized www.ocuco.com  and created and designed www.integra.ie for their pharmacy product in a 24 hour period. My main customer support duties were customer support calls and issues ranging from user training to de-bugging oracle databases, travelling to customer sites to perform installations and deliver training, installing, upgrading, exporting and importing data from other sources to and from Oracle. I also worked with the marketing team to help improve the brand online advising on SEO and implementing Google Analytics."}),
			new WorkModel( {company:"Jeebers", role:"Web developer", date:"January 2008 – March 2008", description:"I worked as a web application developer for Jeebers and gained experience with the following technologies:  XHTML/CSS and JavaScript, PHP/ MySQL , Java, jShop (an eCommerce engine).  I gained valuable commercial web development experience working on high profile websites including sites for: Clearys , Carphone Warehouse, DID Electrical."}),
			new WorkModel( {company:"IBM", role:"Test technician (Z-series)", date:"July 2007 - January 2008", description:"I worked as a server test technician in IBM in Damastown for a 6-month contract. I had also previously worked there as a General Operative on several short-term contracts over the summer before I graduated from university. The role involved testing Z-Series IBM servers and debugging problems, replacing hardware where required e.g. hard drives, PCI cards etc. , writing bash scripts to automate tests where possible, high level exposure to UNIX system administration in a working environment particularly AIX."}),
			new WorkModel( {company:"HP", role:"Product Testing Engineer", date:"May 2008 – February 2010", description:"I completed an internship in Hewlett Packard as part of my degree programme where I worked as a project testing engineer. The role involved research and analysis of current cartridge test procedures, design, test and documentation of new test procedures, training testers and using their feedback productively."})
	]);

	SkillsModel = Backbone.Model.extend({});
	SkillsCollection = Backbone.Collection.extend({ model: SkillsModel});


	var skills = new SkillsCollection([
			new SkillsModel({ content:"My main passion is as a UX web application developer however I have had quite a broad career. My main technical skills are outlined below." })
	]);

	var PortfolioModel = Backbone.Model.extend({});
	var PortfolioCollection = Backbone.Collection.extend({ model: PortfolioModel });

	var portfolioCollection = new PortfolioCollection([
			new PortfolioModel({ title : 'Bitch Please' , description_short : 'bitchplease.ie', image : 'app/img/portfolio/bitchplease.png', modal_id : 'modal-01' , modal_href_title :'Bitch Please' , description_long : 'I designed and created this page for Bitch Please promotions who run club nights. The technologies I used were Ember.js, SASS and Handlebars.', tags : 'Branding, Webdesign' , demo_link : 'http://www.bitchplease.ie'}),
			new PortfolioModel({ title : 'Booterstown United' , description_short : 'booterstownunited.ie', image : 'app/img/portfolio/booterstownunited.png', modal_id : 'modal-02' , modal_href_title :'Booterstown United' , description_long : 'I created this website for a football team I used to play for. It is based on a wordpress template and provides information on their team and acts as a point of contact for the club.', tags : 'Branding, Webdesign', demo_link : 'http://www.booterstownunited.ie'}),
			new PortfolioModel({ title : 'Casino Freebies' , description_short : 'casinofreebies.com', image : 'app/img/portfolio/casinofreebies.png', modal_id : 'modal-03' , modal_href_title :'Casino Freebies' , description_long : 'CasinoFreebies is a page I created as part of my affiliate marketing work. It gathers the best online casino deals in one place to make it easy for people to find the best offers. ', tags : 'Branding, Webdesign', demo_link : 'http://www.casinofreebies.com'}),
			new PortfolioModel({ title : 'Comhairle Teicneolaiochta' , description_short : 'comhairleteicneolaiochta.ie', image : 'app/img/portfolio/comhairleteic.png', modal_id : 'modal-04' , modal_href_title :'Comhairle Teicneolaiochta' , description_long : 'I created this website for my UX consultancy company Comhairle Teicneolaiochta', tags : 'Branding, Webdesign', demo_link : 'http://www.comhairleteicneolaiochta.ie/'}),
			new PortfolioModel({ title : 'Coming soon page' , description_short : 'Coming soon', image : 'app/img/portfolio/comingsoon.png', modal_id : 'modal-05' , modal_href_title :'Coming soon' , description_long : 'A fancy placeholder page for under construction sites', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			new PortfolioModel({ title : 'Easy Docs' , description_short : 'EasyDocs', image : 'app/img/portfolio/easydocs.png', modal_id : 'modal-06' , modal_href_title :'Easy docs' , description_long : 'I worked with <a href="http://www.easydocs.com" target="_blank">EasyDocs</a> in the early stages of their product to help them to migrate from a java based application to a javascript one. I helped them migrate to a much faster system using Backbone and Bootstrap in the front end. ', tags : 'Backbone, JS, Bootstrap, CSS, Branding, Webdesign', demo_link : 'http://peterjwatters.com/portfolio/easyDocs/'}),
			new PortfolioModel({ title : 'Integra' , description_short : 'integra.ie', image : 'app/img/portfolio/integra.png', modal_id : 'modal-07' , modal_href_title :'Integra' , description_long : 'I designed and created this site in 12 hour session back when I was working with Ocuco in 2009. It was intended to provide information and help to sell the main pharmacy POS product.', tags : 'PHP, HTML, CSS, Branding, Webdesign', demo_link : 'http://peterjwatters.com/portfolio/integra/'}),
			new PortfolioModel({ title : 'Ocuco' , description_short : 'ocuco.com', image : 'app/img/portfolio/ocuco.png', modal_id : 'modal-09' , modal_href_title :'Ocuco' , description_long : 'I was working as a support engineer in Ocuco in the early days of my career and helped them to improve their site significantly. They outsourced the website to an offsore team who delivered a crisp design but unmaintainable site. I converted several hundred static HTML files into a more easy to update PHP based system adding in several other features along the way. ', tags : 'PHP, HTML, CSS, Branding, Webdesign', demo_link : 'http://peterjwatters.com/portfolio/ocuco/'}),
			new PortfolioModel({ title : 'Official Football Accumulators' , description_short : 'Illustration', image : 'app/img/portfolio/officialfootballaccumulators.png', modal_id : 'modal-10' , modal_href_title :'Official Football Accumulators' , description_long : 'I created this site when working with a business partner of mine to act as a home page for his business. It helps users stay up to date with the latest football news, calculate betting odds, play games and avail of the best online betting offers.', tags : 'Branding, Webdesign', demo_link : 'http://officialfootballaccumulators.com/#/home'}),
			new PortfolioModel({ title : 'Irene Henriksen Photography' , description_short : 'Illustration', image : 'app/img/portfolio/irenehenriksenphotography.png', modal_id : 'modal-08' , modal_href_title :'Irene Henriksen Photography' , description_long : 'I created this site for an ex-colleague of mine who is a photographer in her spare time. The site uses Backbone-Marrionnette for its structure and loads in a JSON feed from Flickr with her photography', tags : 'Photography, Backbone, Branding, Webdesign', demo_link : 'http://www.irenehenriksenphotography.com'}),
			new PortfolioModel({ title : 'My site 2014' , description_short : 'Illustration', image : 'app/img/portfolio/peter_j_w_2014.png', modal_id : 'modal-11' , modal_href_title :'My personal site' , description_long : 'This is a previous version of my website from 2014', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			new PortfolioModel({ title : 'Peters Photos' , description_short : 'Illustration', image : 'app/img/portfolio/petersphotos.png', modal_id : 'modal-12' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			// new PortfolioModel({ title : 'Sortable Table' , description_short : 'Illustration', image : 'app/img/portfolio/sortabletable.png', modal_id : 'modal-13' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			// new PortfolioModel({ title : 'Ajax Weather Map' , description_short : 'Illustration', image : 'app/img/portfolio/ajaxweathermap.png', modal_id : 'modal-14' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			new PortfolioModel({ title : 'TNF Support Dashboard' , description_short : 'Illustration', image : 'app/img/portfolio/TNF_supportdashboard.png', modal_id : 'modal-15' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'}),
			// new PortfolioModel({ title : 'TNF Customer Inventory' , description_short : 'Illustration', image : 'app/img/portfolio/TNF_customerinventory.png', modal_id : 'modal-16' , modal_href_title :'Coffee Title' , description_long : 'Ooooh eee OOh ah ah', tags : 'Branding, Webdesign', demo_link : 'http://www.google.com'})
		]);

	/*	View init */

	HeaderView = Backbone.Marionette.ItemView.extend({
				el : 'header',
				template: "app/templates/page-layout/header.hbs",
			});

	FooterView = Backbone.Marionette.ItemView.extend({
				el : 'footer',
				template: "app/templates/page-layout/footer.hbs",
			});
	SocialView = Backbone.Marionette.ItemView.extend({
				el : '.social',
				template: "app/templates/common-layout/social.hbs",
				model: socialCollection
			});
	AboutView = Backbone.Marionette.ItemView.extend({
				el : '#about',
				template: "app/templates/page-content/about.hbs",
				model : AboutModel
			});
	EducationView = Backbone.Marionette.ItemView.extend({
				el : '.education',
				template: "app/templates/page-content/education.hbs",
				model: education
			});
	WorkView = Backbone.Marionette.ItemView.extend({
				el : '.work',
				template: "app/templates/page-content/work.hbs",
				model: work
			});
	SkillsView = Backbone.Marionette.ItemView.extend({
				el : '.skill',
				template: "app/templates/page-content/skills.hbs",
				model: skills
			});
	PortfolioView = Backbone.Marionette.ItemView.extend({
				el : '#portfolio',
				template: "app/templates/page-content/portfolio.hbs",
				model: portfolioCollection
			});

	ContactView = Backbone.Marionette.ItemView.extend({
				el : '#contact',
				template: "app/templates/page-content/contact.hbs",
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

	educationView = new EducationView();
	educationView.render();

	workView = new WorkView();
	workView.render();

	skillsView = new SkillsView();
	skillsView.render();

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
	return app;
});
