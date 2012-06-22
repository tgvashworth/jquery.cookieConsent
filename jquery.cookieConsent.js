/*!
 * jQuery CookieConsent Plugin
 * https://github.com/phuu/cookieConsent
 *
 * Copyright 2012, Tom Ashworth
 * Originally created for The Higgs Design Co - http://higgsdesign.com
 */
(function ($) {
  
  $.cookieConsent = function (userConfig) {

    if( ! userConfig ) {
      userConfig = {};
    }
    
    // Default configuration
    var config = {
      mode: 'default', // Default, tab or popover
      persistence: 'heavy', // Light (hides after viewed once) or Heavy (requires user to interact/close)
      color: {
        main: '#29f', // Border & icon color
        bg: '#fff', // Background color
        popover: 'rgba(0,0,0,.3)', // Popover background color
        text: '#444' // Text color
      },
      font: '12px Tahoma, sans-serif', // Font size & family
      slideSpeed: 'fast', // Fast, Slow, or number e.g. 300 or 0 (no animation)
      width: 'auto', // Width of the banner
      maxWidth: '50%', // Responsiveness
      link: {
        cookies: "http://en.wikipedia.org/wiki/HTTP_cookie", // The cookies link
        policy: null // The cookie policy link
      }
    };

    if( $.cookie('cookieConsent') === 'yes' ) {
      $('html').addClass('cookie-consent-given');
      $('#cookie-consent-wrapper').slideDown(config.slideSpeed);
      return;
    }

    config.content =
    { // Allows you to specify the text content of the plugin, using an aray & object based syntax (explained below)
      heading:
        ['strong', {content: 'This site uses '},
          ['a', {href: config.link.cookies, content: 'cookies.'}]
        ],
      text:
        // If config.link.policy evaluates to true, include a link.
        // Ternary operator is somewhat messy here.
        ['p', {content: 'By using this site you agree to our ' + (!! config.link.policy ? '': 'cookie policy.')},
          (!! config.link.policy ? ['a', {href: config.link.policy, content: 'cookie policy.'}] : [])
        ]
    };

    // Build new DOM element from an object
    var buildElement = function buildElement(elemConfig) {

      var i, l;
  
      // First array element is the new DOM element tag
      var temp = document.createElement(elemConfig[0]);
  
      // Second is an object of attributes
      // 'content' attribute is inserted as element content
      if( elemConfig[1] ) {
        var attr = elemConfig[1];
        for( i in attr ) {
          if( attr.hasOwnProperty(i) ) {
            if( i === 'content' ) {
              $(temp).text(attr[i]);
            } else if( i === 'css' ) {
              $(temp).css(attr[i]);
            } else {
              temp.setAttribute(i, attr[i]);
            }
          }
        }
      }
  
      // Third or greater are child elements
      if( elemConfig.length > 2 ) {
          i = 2, l = elemConfig.length;
          for( ; i < l; i++ ) {
              // Allow a string to be passed in
              if( typeof elemConfig[i] === "string" ) {
                $(temp).html($(temp).html() + elemConfig[i]);
              } else {
                temp.appendChild(buildElement(elemConfig[i]));
              }
          }
      }
      
      return temp;
  
    };

    // Extend our config file using the user's config
    $.extend(true, config, userConfig);
    
    // The cookieConsent element
    // Sytanx is:
    //  [element [string], attributes [object], childElements... [arrays]]
    // Special attributes:
    //  content - inserted as text content of the element
    //  css - object run through jQuery's css method
    var cookieElement =
    ['div', {id: "cookie-consent-wrapper"},
      ['div', {id: "cookie-consent"},
        ['div', {id: "cookie-info-icon", content: 'i'}],
        ['p', {},
          config.content.heading
        ],
        config.content.text,
        ['a', {id: "cookie-close", href: '#', content: 'x'}]
      ]
    ];

    // Build style element
    var style = "";
    style += "#cookie-consent-wrapper {display:none;z-index:9999;clear:both;overflow:hidden;position:relative;}";
    if( config.mode === 'popover' ) {
      style += "#cookie-consent-wrapper {position:fixed;top:0;left:0;right:0;bottom:0;background: " + config.color.popover + "; padding-top: 5em;}";
    }
    if( config.mode === 'tab' ) {
      style += "#cookie-consent-wrapper {position:absolute;top:0;left:0;right:0;*width:100%;}";
    }
    style += "#cookie-consent {color: " + config.color.text + ";background: " + config.color.bg + ";width: " + config.width + ";max-width: " + config.maxWidth + ";margin:0 auto;font: " + config.font + ";padding: 0.5em;border: 2px solid " + config.color.main + ";position: relative;}";
    if( config.mode === 'tab' ) {
      style += "#cookie-consent {border-top: none;}";
    }
    style += "#cookie-info-icon {font-family: serif; font-size: 1.4em;background: " + config.color.main + ";float: left;padding: .25em .75em;border-radius: 50%;color: white;margin-right: .5em;}";
    style += "#cookie-consent p {margin: 0;overflow: hidden;}";
    style += "#cookie-consent a, #cookie-consent a:visited {color:" + config.color.main + "}";
    style += "#cookie-consent a:hover {color:" + config.color.text + "}";
    style += "#cookie-close {position: absolute;top: 0;right: 0;padding: 0em .5em .25em;text-decoration: none;}";
    style += "#cookie-close:hover {background: #efefef}";
    style = "<style>" + style + "</style>";

    // Get HTML Element
    var html_elem = $('html');

    // Build the element
    var elem = buildElement(cookieElement);

    if(config.persistence === "light") { // Light, hide after first view
      $.cookie('cookieConsent', 'yes');
    }

    // Set up quit behaviour
    $(elem).on('click', '#cookie-close', function () {
      $.cookie('cookieConsent', 'yes');
      $(elem).slideUp(config.slideSpeed, function () {
        elem.parentNode.removeChild(elem);
        $('html').addClass('cookie-consent-given');
      });
    });

    // Add the elements
    $(style).appendTo('head');
    $(elem).prependTo('body');

  };
  
}(jQuery));