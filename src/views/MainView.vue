<template>
  <main>
    <home-bg />
    <home-news />
    <home-news-bottom />
    <home-stat />
    <home-videos />
    <home-map />
  </main>
</template>

<script>
import HomeBg from "@/components/HomeBg.vue";
import HomeNews from "@/components/HomeNews.vue";
import HomeNewsBottom from "@/components/HomeNewsBottom.vue";
import HomeStat from "@/components/HomeStat.vue";
import HomeVideos from "@/components/HomeVideos.vue";
import HomeMap from "@/components/HomeMap.vue";
export default {
  components: {
    HomeBg,
    HomeNews,
    HomeNewsBottom,
    HomeStat,
    HomeVideos,
    HomeMap,
  },
};
</script>

<style></style>
