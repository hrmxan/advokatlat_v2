<template>
  <section class="bg-bgdarkblue">
    <div class="slideBody">
      <div class="container px-3 mx-auto">
        <h1>{{ $t("news") }}</h1>
      </div>
      <swiper :options="myOptions">
        <swiper-slide>
          <swiper-card></swiper-card>
        </swiper-slide>
        <swiper-slide>
          <swiper-card></swiper-card>
        </swiper-slide>
        <swiper-slide>
          <swiper-card></swiper-card>
        </swiper-slide>
        <swiper-slide>
          <swiper-card></swiper-card>
        </swiper-slide>
        <swiper-slide>
          <swiper-card></swiper-card>
        </swiper-slide>
      </swiper>
      <div class="container px-3 py-5 mx-auto flex justify-center">
        <router-link class="mt-8" to="/news">{{ $t("allNews") }}</router-link>
      </div>
      <!--  -->
    </div>
    <div class="container pb-14 mx-auto px-3 flex flex-col items-center">
      <h2 class="search_title mt-14 mb-6">{{ $t("mahsusAdvokat") }}</h2>
      <div class="input">
        <form class="flex flex-col w-full">
          <input type="text" />
          <button @click.prevent="" type="submit">
            <img src="@/assets/img/search-icon.png" />
          </button>
        </form>
      </div>
      <router-link to="/lawyers" class="mt-5">{{ $t("allAttorneys") }}</router-link>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import SwiperCard from "@/components/cards/swiperCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SwiperCard,
  },
  data() {
    SwiperCard;
    return {
      myOptions: {
        slidesPerView: 1,
        loop: true,
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
