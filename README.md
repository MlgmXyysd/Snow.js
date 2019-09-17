# snow.js
Let your page snowing

## usage
```html
<script type="text/javascript" src="<%- url_for('lib/snow.js') %>"></script>
<script>
    snow.down();
    $(window).resize(function() {
	      $("canvas").css("z-index","500").remove();
        snow.down();
    });
</script>
```
