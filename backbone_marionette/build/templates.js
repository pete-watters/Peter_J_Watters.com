this["JST"] = this["JST"] || {};

this["JST"]["app/templates/common-layout/social.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n       <li><a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><i class=\"fa ";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.icon); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i></a></li>\n ";
  return buffer;
  }

  buffer += " ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["app/templates/page-content/about.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div class=\"row\">\n         <div class=\"three columns\">\n            <img class=\"profile-pic\"  src=\"app/img/profilepic.jpg\" alt=\"\" />\n         </div>\n\n         <div class=\"nine columns main-col\">\n            <h2>About Me</h2>\n            ";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <h2>Contact Details</h2>\n            ";
  if (stack1 = helpers.contact) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.contact); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n         </div> <!-- end .main-col -->\n</div>\n";
  return buffer;
  });

this["JST"]["app/templates/page-content/contact.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n <div class=\"row section-head\">\n\n    <div class=\"two columns header-col\">\n\n       <h1><span>Get In Touch.</span></h1>\n\n    </div>\n\n    <div class=\"ten columns\">\n\n          <p class=\"lead\">\n            If you would like to get in touch feel free to contact me on social media or at:\n              <a href=\"mailto:peter@peterjwatters.com\" target=\"_top\">peter@peterjwatters.com</a>.\n          </p>\n\n    </div>\n\n </div>\n\n<div class=\"row\">\n\n</div>\n";
  });

this["JST"]["app/templates/page-content/education.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n            <div class=\"row item\">\n               <div class=\"twelve columns\">\n                  <h3>";
  if (stack1 = helpers.institution) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.institution); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n                  <p class=\"info\">";
  if (stack1 = helpers.qualification) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.qualification); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span>&bull;</span> <em class=\"date\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</em></p>\n                  <p> ";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </p>\n               </div>\n            </div> <!-- item end -->\n\n         ";
  return buffer;
  }

  buffer += "      <!-- Education      ----------------------------------------------- -->\n         <div class=\"three columns header-col\">\n            <h1><span>Education</span></h1>\n         </div>\n         <div class=\"nine columns main-col\">\n\n         ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n         </div> <!-- main-col end -->";
  return buffer;
  });

this["JST"]["app/templates/page-content/news.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/templates/page-content/portfolio.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <div class=\"columns portfolio-item\">\n                              <div class=\"item-wrap\">\n                                 <a href=\"#";
  if (stack1 = helpers.modal_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.modal_id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.modal_href_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.modal_href_title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                                    <img alt=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                                    <div class=\"overlay\">\n                                       <div class=\"portfolio-item-meta\">\n                                              <h5>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n                                              <p>";
  if (stack1 = helpers.description_short) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description_short); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"link-icon\"><i class=\"icon-plus\"></i></div>\n                                 </a>\n                              </div>\n                            </div>\n               ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n           <div id=\"";
  if (stack1 = helpers.modal_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.modal_id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"popup-modal mfp-hide\">\n              <img class=\"scale-with-grid\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\" />\n                      <div class=\"description-box\">\n                          <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n                          <p>";
  if (stack1 = helpers.description_long) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description_long); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n                       <span class=\"categories\"><i class=\"fa fa-tag\"></i>";
  if (stack1 = helpers.tags) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.tags); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                      </div>\n                    <div class=\"link-box\">\n                       <a href=\"";
  if (stack1 = helpers.demo_link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.demo_link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">Details</a>\n                         <a class=\"popup-modal-dismiss\">Close</a>\n                    </div>\n                  </div>\n        ";
  return buffer;
  }

  buffer += "  <div class=\"row\">\n\n         <div class=\"twelve columns collapsed\">\n\n            <h1>Check Out Some of My Work</h1>\n\n            <div id=\"portfolio-wrapper\" class=\"bgrid-quarters s-bgrid-thirds cf\">\n                ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div> <!-- portfolio-wrapper end -->\n\n         </div> <!-- columns end -->\n\n\n        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div> <!-- row End -->";
  return buffer;
  });

this["JST"]["app/templates/page-content/skills.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n   <p>";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.content); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  }

  buffer += "<!-- Skills -->\n<div class=\"three columns header-col\">\n   <h1><span>Skills</span></h1>\n</div>\n\n<div class=\"nine columns main-col\">\n";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div> <!-- main-col end -->\n\n\n<div class=\"bars\">\n\n   <ul class=\"skills\">\n	   <li><span class=\"bar-expand javascript\"></span><em>Javascript</em></li>\n	   <li><span class=\"bar-expand ember\"></span><em>Ember</em></li>\n     <li><span class=\"bar-expand ruby\"></span><em>Ruby</em></li>\n		 <li><span class=\"bar-expand wordpress\"></span><em>Wordpress</em></li>\n		 <li><span class=\"bar-expand css\"></span><em>CSS</em></li>\n		 <li><span class=\"bar-expand html5\"></span><em>HTML5</em></li>\n     <li><span class=\"bar-expand jquery\"></span><em>jQuery</em></li>\n     <li><span class=\"bar-expand backbone\"></span><em>Backbone / Backbone-Marionette</em></li>\n     <li><span class=\"bar-expand angular\"></span><em>AngularJS</em></li>\n     <li><span class=\"bar-expand python\"></span><em>Python</em></li>\n     <li><span class=\"bar-expand bash-scripting\"></span><em>Bash Scripting</em></li>\n     <li><span class=\"bar-expand mysql\"></span><em>mySQL / DB's</em></li>\n     <li><span class=\"bar-expand system-admin\"></span><em>System Administration(Unix, Windows, OSX)</em></li>\n	</ul>\n\n</div><!-- end skill-bars -->\n";
  return buffer;
  });

this["JST"]["app/templates/page-content/work.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"row item\">\n               <div class=\"twelve columns\">\n                  <h3>";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.company); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n                  <p class=\"info\">";
  if (stack1 = helpers.role) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.role); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span>&bull;</span> <em class=\"date\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</em></p>\n                  <p> ";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " </p>\n               </div>\n            </div> <!-- item end -->\n\n         ";
  return buffer;
  }

  buffer += "<!-- Work ----------------------------------------------- -->\n         <div class=\"three columns header-col\">\n            <h1><span>Work</span></h1>\n         </div>\n\n         <div class=\"nine columns main-col\">\n         ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n         </div> <!-- main-col end -->\n";
  return buffer;
  });

this["JST"]["app/templates/page-layout/footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n      <div class=\"row\">\n\n         <div class=\"twelve columns\">\n\n            <ul class=\"social social-links\">\n            </ul>\n\n            <ul class=\"copyright\">\n               <li>&copy; Copyright 2016</li>\n               <li>Design by <a title=\"Styleshout\" href=\"http://www.styleshout.com/\" target=\"_blank\">Styleshout</a></li>\n               <li>Developed by <a title=\"Peter Watters\" href=\"http://www.peterjwatters.com/\">Peter Watters</a></li>\n            </ul>\n\n         </div>\n\n         <div id=\"go-top\"><a class=\"smoothscroll\" title=\"Back to Top\" href=\"#home\"><i class=\"icon-up-open\"></i></a></div>\n\n      </div>\n";
  });

this["JST"]["app/templates/page-layout/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav id=\"nav-wrap\" class=\"opaque\">\n         <a class=\"mobile-btn\" href=\"#nav-wrap\" title=\"Show navigation\">Show navigation</a>\n         <a class=\"mobile-btn\" href=\"#\" title=\"Hide navigation\">Hide navigation</a>\n\n         <ul id=\"nav\" class=\"nav\">\n            <li class=\"current\"><a class=\"smoothscroll\" href=\"#home\">Home</a></li>\n            <li><a class=\"smoothscroll\" href=\"#about\">About</a></li>\n            <li><a class=\"smoothscroll\" href=\"#resume\">Resume</a></li>\n            <li><a class=\"smoothscroll\" href=\"#portfolio\">Portfolio</a></li>\n            <li><a class=\"smoothscroll\" href=\"#contact\">Contact</a></li>\n         </ul> <!-- end #nav -->\n</nav> <!-- end #nav-wrap -->\n\n<div class=\"row banner\">\n   <div class=\"banner-text\">\n      <h1 class=\"responsive-headline\">Peter Watters</h1>\n      <h3>\n        <span>Full stack developer</span>, <span>UX specialist</span> and <span>\n          Javascript enthusiast</span>.\n       <br><a class=\"smoothscroll\" href=\"#about\">Scrolling</a> to learn more <a class=\"smoothscroll\" href=\"#about\">about me</a>.\n    </h3>\n      <hr />\n      <ul class=\"social\">\n      </ul>\n   </div>\n</div>\n\n<p class=\"scrolldown\">\n   <a class=\"smoothscroll\" href=\"#about\"><i class=\"icon-down-circle\"></i></a>\n</p>\n";
  });