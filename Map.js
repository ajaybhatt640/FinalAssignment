var markers = [
    {
        "title": "Khetrapal Nursing Home",

        "lat": "28.7",

        "lng": "77.8",

        "description": 'Gn 5, F N g Sector Rajouri Garden'

    },

    {

        "title": "Lifecare Nursing Home",

        "lat": "28.5732921",

        "lng": "76.9771919",

        "description": "Dwarka"

    },

    {

        "title": "DermaClinix-The complete Skin and Hair Solution Center",

        "lat": "28.566763",

        "lng": "77.2270273",

        "description": "E-13, Basement, Defence Colony, Near Andrews Ganj Bus Stop, Block E, Defence Colony"

    },

    {

        "title": "Child Health Care Center",

        "lat": "28.5499813",

        "lng": "77.1720887",

        "description": "C-23, Kharera, Hauz Khas"

    },

    {

        "title": "Orthopaedic Clinic",

        "lat": " 28.5702367",

        "lng": "77.1597194",

        "description": "C1 Ln, Block C, Vasant Vihar"

    },

    {

        "title": "Center for Dental Education and Research, AIIMS Campus, Ansari Nagar East, Block D2, Ansari Nagar Eas",

        "lat": " 28.5657211",

        "lng": "77.2108789",

        "description": "Dental OPD, AIIMS"

    },

    {

        "title": "AB-4, 2nd Floor, Shalimar Bagh, AA Block, Poorbi Shalimar Bag, Shalimar Bagh",

        "lat": "  28.70707",

        "lng": "77.1663503",

        "description": "Surgeine Healthcare"

    },

    {

        "title": "Indian Spinal Injuries Centre, Sector C Vasant Kunj, Opposite vasant Valley School, Delhi, IAA Colony, Sector D, Vasant Kunj, New Delhi, Delhi 110070",

        "lat": "28.4531632 ",

        "lng": "77.0704706",

        "description": "Dr Rajat Mahajan- Best Spine Surgeon in Delhi, Spine Specialist,Scoliosis Doctor,Neck Pain Treatment"

    },

    {

        "title": "Khasra no 840, janki max lane, Mandi Rd, Dera Village, Mandi, New Delhi, Delhi 110047",

        "lat": "28.4531632 ",

        "lng": "77.0704706",

        "description": "Janki Max Hospital"

    },



];

window.onload = function () {

    LoadMap();

}

function LoadMap() {

    var mapOptions = {

        center: new google.maps.LatLng(markers[0].lat, markers[0].lng),

        zoom: 8,

        mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var infoWindow = new google.maps.InfoWindow();

    var latlngbounds = new google.maps.LatLngBounds();

    var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);



    for (var i = 0; i < markers.length; i++) {

        var data = markers[i]

        var myLatlng = new google.maps.LatLng(data.lat, data.lng);

        var marker = new google.maps.Marker({

            position: myLatlng,

            map: map,

            title: data.title

        });

        (function (marker, data) {

            google.maps.event.addListener(marker, "click", function (e) {

                infoWindow.setContent("<div style = 'width:200px;min-height:100px'>" + data.description + "</div>");

                infoWindow.open(map, marker);

            });

        })(marker, data);

        latlngbounds.extend(marker.position);

    }

    var bounds = new google.maps.LatLngBounds();

    map.setCenter(latlngbounds.getCenter());

    map.fitBounds(latlngbounds);

}





