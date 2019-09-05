"use strict";
global: Vue;
global: Vue2Leaflet;
global: L;
var {
  LMap,
  LTileLayer,
  LMarker
} = Vue2Leaflet;

vue();

function vue {
  return new Vue({
    el: '#app',
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    data() {
      return {
        zoom: 13,
        center: L.latLng(47.413220, -1.219482),
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(47.413220, -1.219482),
      }
    }
  });
}
/*

    Vue.component('v-map', window.Vue2Leaflet.Map);
    Vue.component('v-tilelayer', window.Vue2Leaflet.TileLayer);
    Vue.component('v-marker', window.Vue2Leaflet.Marker);
    Vue.component('v-popup', window.Vue2Leaflet.Popup);

    new Vue({
        el: '#app',
        data() {
            return {
                zoom: 13,
                center: [47.417220, -1.219482],
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
                markers: []
            }
        },
        mounted () {
          window.setTimeout( () => {
            this.markers.push({
              id: 1,
              latlng: L.latLng(47.417220, -1.222482),
              content: 'Hi! this is my popup data'
            });
          }, 1000);

          window.setTimeout( () => {
            this.markers.push({
              id: 2,
              latlng: L.latLng(47.417220, -1.24),
              content: 'Another'
            });
          }, 2000);


        }
    });

*/
