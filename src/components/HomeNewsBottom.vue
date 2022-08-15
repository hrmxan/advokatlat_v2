<template>
  <section class="bg-bgdarkblue pt-20 pb-20">
    <div class="container px-3 mx-auto">
      <div class="grid grid-cols-12 -mx-4">
        <div data-aos="fade-right" class="col-span-12 md:col-span-6 px-4">
          <news-big-card></news-big-card>
        </div>
        <div data-aos="fade-left" class="col-span-12 md:col-span-6 px-4">
          <news-big-card></news-big-card>
        </div>
        <div
          v-for="(card, index) in 3"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="200 * index"
          class="col-span-12 mb-4 md:col-span-4 px-4"
        >
          <news-mini-card></news-mini-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import newsBigCard from "./cards/newsBigCard.vue";
import newsMiniCard from "./cards/newsMiniCard.vue";
export default {
  components: { newsBigCard, newsMiniCard },
};
</script>

<style></style>
