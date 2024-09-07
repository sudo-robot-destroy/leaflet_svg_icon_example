Simple example of using custom svg files (drawn in inkscape) as icons/markers in leaflet, with the ability to animate them using JavaScript.

For now, you need to run an http server in the main directory to serve up the svg file to avoid CORS issues: 

```python3 -m http.server```

Then go to ```http://localhost:8000/leaflet_example-overlays.html``` to view the page. 

References:

https://wiki.inkscape.org/wiki/SVG_with_javascript

https://lists.inkscape.org/hyperkitty/list/inkscape-user@lists.inkscape.org/thread/DQWHZ3X37GPKAZDRA77LNWKEEPPLR2IK/
