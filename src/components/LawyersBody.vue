<template>
  <section>
    <div class="container mx-auto px-3">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 -mx-3">
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
        </div>
        <div class="col-span-1 px-3 mb-5">
          <lawyer-card />
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
import lawyerCard from "./cards/lawyerCard.vue";
export default {
  components: { lawyerCard },
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
</style>
