<template>
  <main>
    <section class="nav_mask"></section>
    <NewsCardsBody />
  </main>
</template>

<script>
import NewsCardsBody from "@/components/NewsCardsBody.vue";
export default {
  components: { NewsCardsBody },
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
