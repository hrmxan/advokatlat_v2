<template>
  <main>
    <section class="nav_mask"></section>
    <news-body />
  </main>
</template>

<script>
import NewsBody from "@/components/NewsBody.vue";
export default {
  components: { NewsBody },
};
</script>
<style scoped lang="scss">
section.nav_mask {
  height: 84px;
  background-image: url("@/assets/img/header-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
