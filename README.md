# Snow.js
Let your page snowing

## usage

```html
<script type="text/javascript" src="<%- url_for('lib/snow.js') %>"></script> // import Snow.js
<script type="text/javascript">
    let p = snow.down();
    // jQuery
    $(window).resize(function() {
		$(".snowCanvas").remove();
		clearInterval(p);
		p = snow.down();
    });
</script>
```

## license
MIT License
