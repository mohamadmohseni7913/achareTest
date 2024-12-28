<script setup>
import { ref } from 'vue';
import { MapComponent, MapTypes } from '@neshan-maps-platform/mapbox-gl-vue';
import '@neshan-maps-platform/mapbox-gl-vue/dist/style.css';
import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl';


</script>

<template>
  <MapComponent :options="{
    mapKey: 'web.6fa5db15509444e18f85dd1ef7164d56',
    mapType: MapTypes.neshanRaster,
    zoom: 10,
    center: [51.389, 35.6892]
  }" :map-setter="mapSetter" />
  <div class="main-Content-Submit">
    <button @click="passGeo">ثبت و ادامه</button>
  </div>
</template>

<script>
const geoData = ref({}); // Make geoData reactive

const mapSetter = map => {
  let marker = null;

  map.on('click', (e) => {
    const geo = e.lngLat;
    console.log('Clicked at', geo);
    geoData.value = { lng: geo.lng, lat: geo.lat };
    if (marker) {
      marker.remove()
    }
    marker = new nmp_mapboxgl.Marker({ color: "#FF0000" }).setLngLat([e.lngLat.lng, e.lngLat.lat]).setPopup(
      new nmp_mapboxgl.Popup({ offset: 40 })
    ).addTo(map)
  })
  // map.on('click', (e) => {
  //   const geo = e.lngLat;
  //   console.log('Clicked at', geo);
  //   geoData.value = { lng: geo.lng, lat: geo.lat };
  //   new nmp_mapboxgl.Marker({ color: 'blue' })
  //     .setLngLat(geo)
  //     .addTo(map);
  // });

  // map.addControl(new nmp_mapboxgl.NavigationControl());
};
export default {
  name: 'MapComponent',
  props: {
    GetGeo: {
      type: Function,
      required: true
    }
  },
  methods: {
    passGeo() {
      // console.log('GeoData:', geoData.value);
      this.GetGeo(geoData.value);
    }
  }
}
</script>
