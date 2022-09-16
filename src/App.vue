<template>
  <div id="app">
    <loader v-if="isLoading || isLoadingUser" />
    <router-view />
  </div>
</template>

<script>
import loader from "./components/loaderView.vue";
import { mapState } from "vuex";
export default {
  components: {
    loader,
  },
  computed: {
    ...mapState({
      isLoading: (state) => {
        return state.news.isLoading;
      },
      isLoadingUser: (state) => {
        return state.user.isLoading;
      },
    }),
  },
};
</script>

<style lang="scss">
* {
  font-family: "Lato", sans-serif;
  // color: #f8fafc;
}
body {
  background-color: #e8e8e8;
}
</style>
