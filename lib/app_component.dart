
import 'package:angular/angular.dart';
import 'leaflet_interop.dart' as L;

//import 'markers/markers_list.dart';

@Component(
  selector: 'app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [
  //  MarkersListComponent
  ]
)

class AppComponent {


    L.LeafletMap map;

    final name = 'FollowMy.Voyage';

    void ngOnInit() => _init();

    void _init() {

        map = L.Leaflet.map("map-canvas", null);

        map.setView(L.Leaflet.latLng(51, -0.9, 1), 1, null);

        final String _osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        final String _osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        L.Leaflet.tileLayer(_osmUrl, L.TileLayerOptions(
          minZoom: 1,
          maxZoom: 12,
          attribution: _osmAttrib,
        )).addTo(map);


    }


  /*    GMap map = null;

    void ngOnInit() => _getMap();

    void _getMap() {

       final mapCenter = LatLng(destinations[1].lat, destinations[1].lng);

        final mapOptions = MapOptions()
          ..zoom = 12
          ..center = mapCenter;

        this.map = GMap(document.getElementById('map-canvas'), mapOptions);

        for (var destination in destinations) {
          _addDestination(destination);
        }
    }*/


}
