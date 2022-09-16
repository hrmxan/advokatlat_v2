<template>
  <section>
    <div class="container mx-auto px-3 mb-8">
      <not-found v-if="lawyersList.list == '' || lawyersList?.length == 0"></not-found>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 -mx-3">
        <div
          class="col-span-1 px-3 mb-5"
          v-for="(lawyer, index) in lawyersList.list"
          :key="index"
          data-aos="fade-up"
        >
          <lawyer-card
            :fullname="lawyer.fullName"
            :adress="lawyer.contragentAddress"
            :contragent="lawyer.contragentNameLt"
            :contadress="lawyer[`${localLang('contragentAddressName')}`]"
            :img="lawyer.uploadPath"
          />
        </div>
      </div>
      <div v-if="lawyersList.list != ''" class="pagination my-8">
        <div class="pagination-wrap">
          <div class="prev" @click="page > 0 ? setPage(page - 1) : true"></div>
          <div class="count">
            {{ page + 1 }} of
            {{ lawyersList.total ? Math.ceil(lawyersList.total / 20) : "0" }}
          </div>
          <div
            class="next"
            @click="
              page + 1 < Math.ceil(lawyersList.total / 20) ? setPage(page + 1) : true
            "
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import lawyerCard from "@/views/lawyers/components/lawyerCard.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import localeKey from "@/core/localKey";
import NotFound from "@/components/notFound.vue";
export default {
  components: { lawyerCard, NotFound },
  data() {
    return {
      coontLimit: 20,
      constSearch: "",
    };
  },
  computed: {
    ...mapState({
      lawyersList: (state) => state.contragents.list,
      page: (state) => state.contragents.page,
      contId: (state) => state.contragents.contId,
      regionId: (state) => state.contragents.regionId,
      search: (state) => state.contragents.search,
    }),
  },
  watch: {
    page() {
      this.getListLawyers();
      this.setPage(this.page);
    },
  },
  methods: {
    ...mapActions({
      getLawyers: "contragents/getListLawyers",
      getContragents: "contragents/getContragents",
    }),
    ...mapMutations({
      setPage: "contragents/setPage",
    }),
    localeKey,
    localLang(key) {
      return this.localeKey(key, this.$i18n.locale);
    },
    async getListLawyers() {
      let data = {
        page: this.page,
        limit: 20,
      };
      let querys = {
        search: this.search,
        status: "",
        contragentId: this.contId,
        regionId: this.regionId,
      };
      await this.getLawyers({ querys, data });
    },
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
</style>
