<template>
  <section class="pt-10">
    <div v-if="newslist || newslist != {}" class="container mx-auto px-3 mb-8">
      <strong>{{ $t("news") }}</strong>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 -mx-3 mt-8">
        <div
          class="col-span-1 px-3 mb-5"
          v-for="(news, index) in newslist"
          :key="index"
          data-aos="fade-up"
        >
          <!-- {{ $i18n.locale }} -->
          <newsCard
            :title="news[`${localLang('title')}`]"
            :text="news[`${localLang('text')}`]"
            :id="news.id"
          />
        </div>
      </div>
      <!-- <div class="pagination my-8">
        <div class="pagination-wrap">
          <div class="prev"></div>
          <div class="count">2 of 119</div>
          <div class="next"></div>
        </div>
      </div> -->
    </div>
    <div v-else class="container mx-auto px-3 mb-8 min-h-screen">
      <h1 class="text-bgdarkblue text-xl">
        {{ $t("noNewsYet") }}
      </h1>
    </div>
  </section>
</template>

<script>
import newsCard from "@/views/news/components/newsCard.vue";
import { mapState, mapActions } from "vuex";
import localeKey from "@/core/localKey";

export default {
  components: { newsCard },
  computed: {
    ...mapState({
      newslist: (state) => {
        return state.news.list;
      },
    }),
  },
  methods: {
    ...mapActions({
      getNews: "news/getList",
    }),
    localeKey,
    localLang(key) {
      return this.localeKey(key, this.$i18n.locale);
    },
    async getNewsList() {
      await this.getNews();
    },
  },
  created() {
    this.getNewsList();
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  &-wrap {
    display: flex;
    .prev,
    .next {
      display: flex;
      width: 45px;
      height: 45px;
      justify-content: center;
      align-items: center;
      border: 1px solid #d4d4d4;
      cursor: pointer;
    }
    .count {
      display: flex;
      padding: 0 20px;
      justify-content: center;
      align-items: center;
      border: 1px solid #d4d4d4;
      font-size: 14px;
      color: black;
    }

    .prev {
      background: url("@/assets/img/blue-arrow1.svg") no-repeat center center;
    }
    .next {
      background: url("@/assets/img/blue-arrow2.svg") no-repeat center center;
    }
  }
}
strong {
  color: #48a8c0;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin: 0 0 20px;
}
</style>
