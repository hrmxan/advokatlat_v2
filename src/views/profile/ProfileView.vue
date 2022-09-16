<template>
  <div class="bg-bgleight">
    <InfoView />
    <files-upload />
  </div>
</template>

<script>
import FilesUpload from "./sections/FilesUpload.vue";
import InfoView from "./sections/InfoView.vue";
export default {
  components: {
    InfoView,
    FilesUpload,
  },
};
</script>

<style></style>
