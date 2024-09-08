L.GaugeMarker = L.Marker.extend({
    initialize: function (latlng, options) {
        L.Marker.prototype.initialize.call(this, latlng, options);
        const width = options.icon.options.iconSize[0];
        const height = options.icon.options.iconSize[1];
        options.icon.options.html.setAttribute("width", width);
        options.icon.options.html.setAttribute("height", height);
    },

    update_dial: function (degree = 0) {
        var dial = this._icon.querySelector("#dial");
        dial.setAttribute("transform", `rotate(${degree} 115.87487 103.9918)`);
    }
});

L.gaugeMarker = function (latlng, options) {
    return new this.GaugeMarker(latlng, options);
};

function loadSVGSync(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status === 200) {
        const textResponse = xhr.responseText;
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(textResponse, "image/svg+xml");
        const svgElement = svgDoc.documentElement;
        return svgElement;
    } else {
        throw new Error(`Failed to load SVG: ${xhr.status}`);
    }
}