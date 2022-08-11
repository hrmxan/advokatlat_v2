<template>
  <section class="headerBg bg-bgdarkblue">
    <swiper :options="myOptions">
      <swiper-slide>
        <div class="bgCard relative">
          <img src="@/assets/img/bg-1.jpg" />
          <div class="bgDark"></div>
          <div class="title absolute container mx-auto px-3">
            <h1>
              {{ $t("homeBG.title.first") }}
              <span>{{ $t("homeBG.title.middle") }}</span>
              {{ $t("homeBG.title.last") }}
            </h1>
            <p>
              {{ $t("homeBG.subtitle") }}
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bgCard relative">
          <img src="@/assets/img/bg-2.jpg" />
          <div class="bgDark"></div>
          <div class="title absolute container mx-auto px-3">
            <h1>
              {{ $t("homeBG2.title.first") }}
              <span>{{ $t("homeBG2.title.middle") }}</span>
              {{ $t("homeBG2.title.last") }}
            </h1>
            <p>
              {{ $t("homeBG2.subtitle") }}
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bgCard relative">
          <img src="@/assets/img/bg-3.jpg" />
          <div class="bgDark"></div>
          <div class="title absolute container mx-auto px-3">
            <h1>
              {{ $t("homeBG3.title.first") }}
              <span>{{ $t("homeBG3.title.middle") }}</span>
              {{ $t("homeBG3.title.last") }}
            </h1>
            <p>
              {{ $t("homeBG3.subtitle") }}
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bgCard relative">
          <img src="@/assets/img/bg-4.jpg" />
          <div class="bgDark"></div>
          <div class="title absolute container mx-auto px-3">
            <h1>
              {{ $t("homeBG4.title.first") }}
              <span>{{ $t("homeBG4.title.middle") }}</span>
              {{ $t("homeBG4.title.last") }}
            </h1>
            <p>
              {{ $t("homeBG4.subtitle") }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      viewCars: 0,
      myOptions: {
        slidesPerView: 1,
        // direction: "vertical",
        // cssMode: true,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.swiper-slide-active {
  .title {
    h1 {
      opacity: 1 !important;
      transform: translateY(0) scale(1, 1) !important;
    }
    p {
      opacity: 1 !important;
      transform: translateY(0) scale(1, 1) !important;
    }
  }
}
// swiper-slide
// .swiper-slide-prev.swiper-slide-duplicate-next
.headerBg {
  position: relative;
  width: 100%;

  .bgCard {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .title {
      top: 35%;
      left: 50%;
      max-width: 800px;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 70px;
        font-weight: 700;
        line-height: 70px;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        opacity: 0;
        transform: translateY(50px) scale(0.5, 1);
        transition: 0.5s ease;
        @media (max-width: 768px) {
          font-size: 50px;
          line-height: 50px;
        }
        span {
          @apply text-baseyellow;
        }
      }
      p {
        font-size: 20px;
        font-weight: 400;
        line-height: 20px;
        color: #fff;
        text-align: center;
        margin-top: 20px;
        opacity: 0;
        transform: translateY(50px) scale(0.5, 1);
        transition: 0.5s ease;
        transition-delay: 0.3s;
      }
    }
  }
}

.bgDark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: rgba($color: #002b33, $alpha: 0.6);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #002b33);
}
</style>
