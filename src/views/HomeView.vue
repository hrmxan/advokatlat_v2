<template>
  <div>
    <navbar-site></navbar-site>
    <router-view></router-view>
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

<style></style>
