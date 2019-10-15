
import 'package:angular/angular.dart';
import 'markers/markers_list.dart';

@Component(
  selector: 'app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [
    MarkersListComponent
  ]
)

class AppComponent {

    final name = 'FollowMy.Voyage';

    /*void ngOnInit() => _init();

    void _init() {

    }*/
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
