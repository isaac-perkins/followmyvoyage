import 'dart:html';
import 'package:angular/angular.dart';
import 'package:google_maps/google_maps.dart';

@Component(
  selector: 'markers-list',
  templateUrl: 'markers_list.html',
  styleUrls: ['markers.css'],
  directives: [
    coreDirectives,
  ]
)

class MarkersListComponent implements OnInit {

  List markers;
  GMap map = null;
  MapOptions mapOptions = null;

  bool isLoading = true;

  @ViewChild('inputName') InputElement inputName;
  @ViewChild('inputDesc') InputElement inputDesc;
  @ViewChild('inputLat') InputElement  inputLat;
  @ViewChild('inputLng') InputElement inputLng;

  void ngOnInit() => _init();

  void _init() {
    markers = [
      Pin(name: "A", description: "lorem ipsum navigit navagee", lat: -25.363882, lng: 131.044922),
      Pin(name: "B", description: "navigit navageelorem ipsum lorem", lat: -25.383882, lng: 131.014922),
      Pin(name: "C", description: "ipsum navigit lorem navagee", lat: -25.393882, lng: 131.094922)
    ];
    _mapInit();
    for (var mark in markers) {
      _addMark(mark);
    }
    isLoading = false;
  }

  void _mapInit() {
    final mapCenter = LatLng(-25.363882, 131.044922);
    this.mapOptions = MapOptions()
      ..zoom = 12
      ..center = mapCenter;
     this.map = GMap(document.getElementById('map-canvas'), this.mapOptions);
  }

  MarkersListComponent();

  void add() {
    final pin = Pin(name: inputName.value, description: inputDesc.value, lat: double.parse(inputLat.value), lng: double.parse(inputLng.value));
    markers.add(pin);
    inputName.value = '';
    inputDesc.value = '';
    inputLat.value = '';
    inputLng.value = '';
    _addMark(pin);
  }

  void _addMark(pin) {
    final infowindow = InfoWindow(InfoWindowOptions()..content = pin.description);
    var marker = Marker(MarkerOptions()
     ..position = LatLng(pin.lat, pin.lng)
     ..map = this.map
     ..title = pin.name
   );
   marker.onClick.listen((e) {
     infowindow.open(map, marker);
   });
  }

}

class Pin {

  String name;
  String description;
  double lat;
  double lng;

  Pin({this.name, this.description, this.lat, this.lng});

  Future<void> save() async {

  }
}
