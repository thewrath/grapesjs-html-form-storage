# GrapesJS HTML Form Storage (Unofficial)

<br/>

## Download

* `npm i grapesjs-html-form-storage`



## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-html-form-storage.min.js"></script>

<input hidden id="storage" type="textarea" value="" />

<div id="gjs">
</div>

<script type="text/javascript">
  var editor = grapesjs.init({
      fromElement: 1,
      container : '#gjs',
      plugins: ['grapesjs-html-form-storage'],
      pluginsOpts: {
        'grapesjs-html-form-storage': {
          storageElementId: 'storage' // Required
        }
      }
  });
</script>
```

## License

MIT