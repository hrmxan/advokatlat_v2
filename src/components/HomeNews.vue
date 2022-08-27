<template>
  <section class="bg-bgdarkblue">
    <div v-if="newslist || newslist != {}" class="slideBody">
      <div class="container px-3 mx-auto">
        <h1 data-aos="zoom-in">{{ $t("news") }}</h1>
      </div>
      <swiper :options="myOptions">
        <swiper-slide v-for="(news, index) in newslist" :key="index">
          <swiper-card
            :title="news[`${localLang('title')}`]"
            :text="news[`${localLang('text')}`]"
            :id="news.id"
            data-aos="fade-up"
          ></swiper-card>
        </swiper-slide>
      </swiper>
      <div class="container px-3 py-5 mx-auto flex justify-center">
        <router-link data-aos="zoom-in" class="mt-8" to="/news">{{
          $t("allNews")
        }}</router-link>
      </div>
      <!--  -->
    </div>
    <div v-else class="mb-16">
      <h1 class="text-bgdarkblue">
        {{ $t("noNewsYet") }}
      </h1>
    </div>
    <div class="container pb-14 mx-auto px-3 flex flex-col items-center">
      <h2 data-aos="zoom-in" class="search_title mt-14 mb-6">
        {{ $t("mahsusAdvokat") }}
      </h2>
      <div class="input">
        <form
          @submit.prevent="searchSubmit"
          data-aos="zoom-in"
          data-aos-delay="200"
          class="flex flex-col w-full"
        >
          <input v-model="searchInput" type="text" :placeholder="$t('search')" />
          <button type="submit">
            <img src="@/assets/img/search-icon.png" />
          </button>
        </form>
      </div>
      <router-link data-aos="zoom-in" data-aos-delay="400" to="/lawyers" class="mt-5">{{
        $t("allAttorneys")
      }}</router-link>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import SwiperCard from "@/components/cards/swiperCard.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import localeKey from "../core/localKey";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SwiperCard,
  },
  computed: {
    ...mapState({
      newslist: (state) => state.news.list,
    }),
  },
  data() {
    SwiperCard;
    return {
      searchInput: "",
      myOptions: {
        slidesPerView: 1,
        spaceBetween: 15,
        // loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
          // when window width is >= 320px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          1280: {
            slidesPerView: 4,
          },
        },
      },
    };
  },
  watch: {},
  methods: {
    ...mapActions({
      getNews: "news/getList",
    }),
    ...mapMutations({
      setSearch: "contragents/setSearch",
    }),
    localeKey,
    localLang(key) {
      return this.localeKey(key, this.$i18n.locale);
    },
    async getNewsList() {
      await this.getNews();
    },
    searchSubmit() {
      this.setSearch(this.searchInput);
      this.$router.push({ name: "Lawyers" });
    },
  },
  created() {
    this.getNewsList();
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  margin-bottom: 30px;
  padding: 0;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.input {
  display: flex;
  width: 470px;
  position: relative;
  @media (max-width: 520px) {
    width: 100%;
  }
  input {
    display: flex;
    width: 100%;
    padding: 10px 40px 10px 10px;
    outline: none;
    @apply text-bgdarkblue;
    font-size: 16px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.slideBody {
  transform: translateY(-100px);
  position: relative;
  z-index: 10;
}
a {
  color: #c0cf13;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
}
h2.search_title {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
}
</style>
