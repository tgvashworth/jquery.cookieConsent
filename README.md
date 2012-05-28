# CookieConsent

Drop-in jQuery plugin for implied to consent to the EU Cookie directive.

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
    color: {
      main: '#29f', // Border & icon color
      bg: '#fff', // Background color
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