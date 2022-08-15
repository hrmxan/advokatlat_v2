<template>
  <section class="map mb-4">
    <div class="px-3 h-full">
      <l-map
        class="pointer-events-none"
        style="height: 100%"
        :zoom="zoom"
        :center="center"
      >
        <l-tile-layer :url="url" :icon="icon"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng" :icon="icon"></l-marker>
        <l-marker :lat-lng="markerLatLng2" :icon="icon"></l-marker>
        <l-geo-json :geojson="geoMap" :options="options" :options-style="styleFunction" />
      </l-map>
    </div>
  </section>
  <!-- <section>
    <img src="@/assets/img/uzbkarta.png" />
  </section> -->
</template>

<script>
import Vue from "vue";
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LPolygon, LGeoJson } from "vue2-leaflet";

import geoMap from "./uzbekistan_regional";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-polygon", LPolygon);
Vue.component("l-geo-json", LGeoJson);

export default {
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#002b33",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 0.6,
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.code +
            "</div><div>nom: " +
            feature.properties.nom +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
  },
  data() {
    return {
      geojson: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 5.5,
      center: [41.688773766291966, 64.38806273571723],
      markerLatLng: [41.31160606176791, 69.27701201083019],
      markerLatLng2: [41.31161078261277, 69.28025231586949],
      icon: L.icon({
        iconUrl: require("@/assets/img/location.svg"),
        iconSize: [50, 45],
        iconAnchor: [16, 37],
      }),
      geoMap,
      fillColor: "#48A8C0",
    };
  },
};
</script>

<style lang="scss">
section.map {
  height: 576px;
  z-index: 1;
  @media (max-width: 768px) {
    height: 400px;
  }
  * {
    @apply text-bgdarkblue;
    z-index: 1 !important;
  }
}
</style>
