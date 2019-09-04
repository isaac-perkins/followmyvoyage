function lngLatArrayToLatLng(lngLatArray) {
  return lngLatArray.map(lngLatToLatLng);
}

function lngLatToLatLng(lngLat) {
  return [lngLat[1], lngLat[0]];
}

$(function () {

  var pointsForJson = [
    [0.1278, 51.5074],
    [2.3522, 48.8566],
    [7.4474, 46.9480],
    [8.5417, 47.3769]
  ];

  $(document).ready(function () {

      var map = L.map('map');

      pointsForJson.forEach(function(lngLat) {
        L.marker(lngLatToLatLng(lngLat)).addTo(map);
      });

      var polyline = L.polyline(lngLatArrayToLatLng(pointsForJson)).addTo(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      map.fitBounds(polyline.getBounds());

      L.marker([46.9480, 7.4474]).addTo(map)
      .bindPopup('<a href="#" data-toggle="modal" data-target="#exampleModal"><b>Bern</b></a>').openPopup();

      L.marker([47.3769, 8.5417]).addTo(map)
      .bindPopup('<a href="#" data-toggle="modal" data-target="#exampleModal"><b>Zurich</b></a>').openPopup();

  });

});
