![jquery.cookieConsent](http://i.phuu.net/2h0g1E3z3P252L2l312I/Screen%20Shot%202012-05-28%20at%2012.06.13.png)

# jquery.cookieConsent

Drop-in jQuery plugin for implied to consent to the EU Cookie directive.

Compliance in one file and `$.cookieConsent()`.

Please fork and contribute!

Contains [jquery.cookie](https://github.com/carhartl/jquery-cookie).

### Usage

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="jquery.cookieConsent.min.js"></script>
<script>
  $(function () {
    $.cookieConsent();
  });
</script>
```

### Configuration

You can configure the plugin by passing in an object.

```javascript
  $.cookieConsent({
    mode: 'default', // Default, tab or popover
    color: {
      main: '#29f', // Border & icon color
      bg: '#fff', // Background color
      popover: 'rgba(0,0,0,.3)', // Popover background color
      text: '#444' // Text color
    },
    font: '12px Tahoma, sans-serif', // Font size & family
    width: 'auto', // Width of the banner
    maxWidth: '50%', // Responsiveness
    link: {
      cookies: "http://en.wikipedia.org/wiki/HTTP_cookie", // The cookies link
      policy: "link/to/your/policy" // The cookie policy link
    },
    content: {
      // Allows you to specify the text content of the plugin, using an aray & object based syntax (explained below)
      // You can also pass in a string, eg: "<p>Read our <a href='/policy.html'>policy</a></p>"
      heading:
        ['strong', {content: 'This site uses '},
          ['a', {href: 'http://en.wikipedia.org/wiki/HTTP_cookie', content: 'cookies.'}]
        ],
      text:
        ['p', {content: "We won't share your data with any third parties."}]
    }
  });
```

If you'd like to configure the text, you can use the syntax described below:

```javascript

// The cookieConsent element
// Sytanx is:
//  [element [string], attributes [object], childElements... [arrays]]
// Special attributes:
//  content - inserted as text content of the element
//  css - object run through jQuery's css method

// For example:
var myElement =
['div', {id: "my-element"},
  ['p', {css: {color: "red"}, content: "I love red paragraphs"}],
  ['a', {href: "http://google.com/", content: "Click me!"}]
];

```

### License

MIT License

Copyright (C) Tom Ashworth 2012