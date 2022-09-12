<template>
  <main>
    <section class="nav_mask"></section>
    <lawters-filter />
    <lawyers-body />
  </main>
</template>

<script>
import LawtersFilter from "@/views/lawyers/sections/LawtersFilter.vue";
import LawyersBody from "@/views/lawyers/sections/LawyersBody.vue";
export default {
  components: { LawtersFilter, LawyersBody },
};
</script>

<style scoped lang="scss">
section.nav_mask {
  height: 168px;
  background-image: url("@/assets/img/header-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
