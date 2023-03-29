<template>
  <div class="mt-5 sm:mt-[70px] h-[400px] xl:w-full bg-sky-400 mx-4 xl:mx-0">
    <div id="map"></div>
  </div>
</template>
<script>
export default {
  name: "Map",
  methods: {
    initMap() {
      const uluru = { lat: 41.312, lng: 69.240 };

      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: uluru,
      });

      const marker = new google.maps.Marker({
        position: uluru,
        map: map,
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style></style>
