![jquery.cookieConsent](http://i.phuu.net/2h0g1E3z3P252L2l312I/Screen%20Shot%202012-05-28%20at%2012.06.13.png)

# jquery.cookieConsent

Drop-in jQuery plugin for implied to consent to the EU Cookie directive.

Compliance in one file and `$.cookieConsent()`.

Contains [jquery.cookie](https://github.com/carhartl/jquery-cookie).

### Usage

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="jquery.cookieConsent.min.js"></script>
<script>
  $.cookieConsent();
</script>
```

### Configuration

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
    maxWidth: '50%' // Responsiveness
  });
```

### License

MIT License

Copyright (C) Tom Ashworth 2012