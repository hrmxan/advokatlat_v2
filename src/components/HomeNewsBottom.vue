<template>
  <section class="bg-bgdarkblue pt-20 pb-20 overflow-hidden">
    <div class="container px-3 mx-auto">
      <div class="grid grid-cols-12 -mx-4">
        <div data-aos="fade-right" class="col-span-12 md:col-span-6 px-4">
          <news-big-card
            :to="$t('prezidentUz.link')"
            :title="$t('prezidentUz.title')"
            :poster="$t('prezidentUz.poster')"
          ></news-big-card>
        </div>
        <div data-aos="fade-left" class="col-span-12 md:col-span-6 px-4">
          <news-big-card
            :to="$t('goUz.link')"
            :title="$t('goUz.title')"
            :poster="$t('goUz.poster')"
          ></news-big-card>
        </div>
        <div
          data-aos="fade-up"
          :data-aos-delay="0"
          class="col-span-12 mb-4 md:col-span-4 px-4"
        >
          <news-mini-card
            :to="$t('parliamentUz.link')"
            :title="$t('parliamentUz.title')"
            :poster="$t('parliamentUz.poster')"
          ></news-mini-card>
        </div>
        <div
          data-aos="fade-up"
          :data-aos-delay="200"
          class="col-span-12 mb-4 md:col-span-4 px-4"
        >
          <news-mini-card
            :to="$t('senatUz.link')"
            :title="$t('senatUz.title')"
            :poster="$t('senatUz.poster')"
          ></news-mini-card>
        </div>
        <div
          data-aos="fade-up"
          :data-aos-delay="400"
          class="col-span-12 mb-4 md:col-span-4 px-4"
        >
          <news-mini-card
            :to="$t('lexUz.link')"
            :title="$t('lexUz.title')"
            :poster="$t('lexUz.poster')"
          ></news-mini-card>
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
