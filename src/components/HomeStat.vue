<template>
  <section>
    <div class="p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mx-2">
        <div class="flex flex-col px-2 col-span-1 mb-4">
          <div class="stCard h-full" data-aos="fade-up">
            <strong>{{ info.countAdvokatlikByurosi }}</strong>
            <p>{{ $t("lawBureau") }}</p>
          </div>
        </div>
        <div class="flex flex-col px-2 col-span-1 mb-4">
          <div class="stCard second h-full" data-aos="fade-up" data-aos-delay="200">
            <strong>{{ info.countAdvokatlikFirmasi }}</strong>
            <p>{{ $t("lawFirm") }}</p>
          </div>
        </div>
        <div class="flex flex-col px-2 col-span-1 mb-4">
          <div class="stCard three h-full" data-aos="fade-up" data-aos-delay="400">
            <strong>{{ info.countLawyer }}</strong>
            <p>{{ $t("countLawyer") }}</p>
          </div>
        </div>
        <div class="flex flex-col px-2 col-span-1 mb-4">
          <div class="stCard four h-full" data-aos="fade-up" data-aos-delay="600">
            <strong>{{ info.countAdvokatlarHayati }}</strong>
            <p>{{ $t("lawyerPanel") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      info: (state) => state.contragents.countInfo,
    }),
  },
  methods: {
    ...mapActions({
      countInfo: "contragents/countInfo",
    }),
    async restart() {
      await this.countInfo();
    },
  },
  created() {
    this.restart();
  },
};
</script>

<style scoped lang="scss">
.stCard {
  background: #48a8c0;
  padding: 35px;
  strong {
    display: flex;
    justify-content: center;
    font-size: 64px;
    font-weight: 900;
    line-height: 50px;
    margin: 0px 0px 18px;
    margin-bottom: 20px;
  }
  p {
    font-size: calc(18px + 0 * ((100vw - 350px) / 850));
    text-align: center;
  }
  &.second {
    background: #14656b;
  }
  &.three {
    background: #333f48;
  }
  &.four {
    background: #1d1d1d;
  }
}
</style>
