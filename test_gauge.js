L.GaugeMarker = L.Marker.extend({
    initialize: function (latlng, options) {
        L.Marker.prototype.initialize.call(this, latlng, options);
    },
    update_dial: function (degree = 0) {
        var dial = this._icon.querySelector("svg").querySelector("#dial");
        dial.setAttribute("transform", `rotate(${degree} 115.87487 103.9918)`);
    }
});

L.gaugeMarker = function (latlng, options) {
    return new L.GaugeMarker(latlng, options);
};
// function update_dial(degree=0) {
//     var dial = document.querySelector('.my-icon svg').querySelector("#dial");
//     var d = dial.getAttribute("d");
//     dial.setAttribute("transform", `rotate(${degree} 115.87487 103.9918)`);
// };
