<template>
  <section class="pt-10">
    <div class="container mx-auto px-3">
      <strong>{{ $t("news") }}</strong>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 -mx-3 mt-8">
        <div
          class="col-span-1 px-3 mb-5"
          v-for="(news, index) in 12"
          :key="index"
          data-aos="fade-up"
        >
          <news-card />
        </div>
      </div>
      <div class="pagination my-8">
        <div class="pagination-wrap">
          <div class="prev"></div>
          <div class="count">2 of 119</div>
          <div class="next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import newsCard from "./cards/newsCard.vue";
export default {
  components: { newsCard },
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
