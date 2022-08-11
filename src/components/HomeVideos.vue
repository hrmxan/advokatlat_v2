<template>
  <section class="pb-5">
    <div class="container mx-auto px-3">
      <h2 class="my-5">{{ $t("videos") }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 -mx-2">
        <div class="col-span-1 px-2 mb-4">
          <video-card></video-card>
        </div>
        <div class="col-span-1 px-2 mb-4">
          <video-card></video-card>
        </div>
        <div class="col-span-1 px-2 mb-4">
          <video-card></video-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoCard from "./cards/videoCard.vue";
export default {
  components: { VideoCard },
};
</script>

<style scoped>
h2 {
  color: #1d1d1d;
  font-size: 20px;
  letter-spacing: 4px;
  line-height: 24px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
}
</style>
