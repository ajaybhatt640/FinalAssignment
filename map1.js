var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(28.38,77.12),
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'jsonfile(1).json';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.doctorListing.length; i++) {
    var coords = results.doctorListing[i].address.gpsCoordinates;
    var latLng = new google.maps.LatLng(28.5732921,
        76.9771919);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}