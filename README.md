# Snow.js
Let your page snowing

## usage

```html
<script type="text/javascript" src="<%- url_for('lib/snow.js') %>"></script>
<script>
    snow.down();
    // jQuery
    $(window).resize(function() {
	$(".snowCanvas").remove();
        snow.down();
    });
</script>
```

## license
MIT License
