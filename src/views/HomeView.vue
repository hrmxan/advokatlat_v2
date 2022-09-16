<template>
  <div class="home min-h-screen flex flex-col">
    <navbar-site></navbar-site>
    <router-view class="grow home__view"></router-view>
    <footer-site></footer-site>
  </div>
</template>

<script>
import NavbarSite from "@/components/NavbarSite.vue";
import FooterSite from "@/components/FooterSite.vue";
export default {
  components: { NavbarSite, FooterSite },
};
</script>

<style lang="scss" scoped>
.home__view {
  flex-grow: 1;
}
</style>
