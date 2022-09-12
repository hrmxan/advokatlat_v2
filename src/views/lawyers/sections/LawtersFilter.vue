<template>
  <section class="filter mb-5 pb-5 -mt-6">
    <div class="container mx-auto px-3">
      <form>
        <div class="form-row grid grid-cols-1 sm:grid-cols-2 -mx-3">
          <div class="col-span-1 sm:col-span-3 px-3 mb-5 my_multiselect">
            <input
              v-model="filterSearch"
              :placeholder="$t('search')"
              class="my__search"
              type="text"
            />
          </div>
          <div class="col-span-1 px-3 my_multiselect my-3">
            <multiselect
              v-model="viloyat"
              :options="regions"
              :custom-label="nameRegion"
              :show-labels="false"
              :placeholder="$t('region')"
            >
              <template slot="noResult">{{ $t("noInfoFound") }}</template>
            </multiselect>
          </div>
          <div class="col-span-1 px-3 my_multiselect my-3">
            <multiselect
              v-model="mutahasislik"
              :options="contList.list"
              :custom-label="nameWithLang"
              :show-labels="false"
              :placeholder="$t('organization')"
              :max-height="250"
              @scroll="onScroll"
              class="contragentsSelect"
            >
              <template slot="noResult">{{ $t("noInfoFound") }}</template>
            </multiselect>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapState, mapActions, mapMutations } from "vuex";
import localeKey from "@/core/localKey";
import "vue-multiselect/dist/vue-multiselect.min.css";
export default {
  components: { Multiselect },
  data() {
    return {
      viloyat: null,
      options: [
        { name: "Namangan", value: "namangan" },
        { name: "Toshkent", value: "toshkent" },
        { name: "Farg'ona", value: "fargona" },
      ],
      tashkilot: null,
      optionsTashkilot: [
        { name: "Tashkilot1", value: "tashkilot1" },
        { name: "Tashkilot2", value: "tashkilot2" },
        { name: "Tashkilot3", value: "tashkilot3" },
      ],
      mutahasislik: null,
      isVisible: false,
      getCount: 0,
      coontLimit: 20,
      constSearch: "",
      filterSearch: "",
    };
  },
  computed: {
    ...mapState({
      contList: (state) => state.contragents.contList,
      contId: (state) => state.contragents.contId,
      regionId: (state) => state.contragents.regionId,
      regions: (state) => state.contragents.regions,
      page: (state) => state.contragents.page,
      search: (state) => state.contragents.search,
    }),
    regList: function () {
      let list = [];
      this.regions.forEach((region) => {
        console.log(region);
      });
      return list;
    },
  },
  watch: {
    mutahasislik(e) {
      if (e != null) this.setConstId(this.mutahasislik.id);
      else this.setConstId("");
    },
    viloyat(e) {
      this.setRegId(e.id);
    },
    contId() {
      this.setPage(0);
      this.getListLawyers();
    },
    regionId() {
      this.setPage(0);
      this.getListLawyers();
    },
    filterSearch(e) {
      this.setSearch(e);
      this.getListLawyers();
    },
  },
  methods: {
    ...mapActions({
      getLawyers: "contragents/getListLawyers",
      getContragents: "contragents/getContragents",
      countInfo: "contragents/countInfo",
      getRegions: "contragents/getRegions",
    }),
    ...mapMutations({
      setConstId: "contragents/setConstId",
      setPage: "contragents/setPage",
      setSearch: "contragents/setSearch",
      setRegId: "contragents/setRegId",
    }),
    localeKey,
    localLang(key) {
      return this.localeKey(key, this.$i18n.locale);
    },
    nameWithLang({ name }) {
      return `${name}`;
    },
    nameRegion(a) {
      return a[`${this.localLang("name")}`];
    },
    onScroll(e) {
      console.log(e);
    },
    async mountedStart() {
      await this.contragentsList();
      await this.getListLawyers();
      await this.countInfo();
    },
    async contragentsList() {
      let contData = {
        limit: this.coontLimit,
        page: 0,
        search: this.constSearch,
      };
      await this.getContragents(contData);
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
  created() {
    this.mountedStart();
    this.filterSearch = this.search;
    this.getRegions();
  },
  mounted() {
    let scrolWrap = document.querySelectorAll(
      ".contragentsSelect .multiselect__content-wrapper"
    );
    scrolWrap.forEach((item) => {
      item.addEventListener("scroll", () => {
        let sb = item.querySelector(".multiselect__content");
        if (+item.offsetHeight + item.scrollTop >= sb.offsetHeight && this.getCount < 1) {
          this.getCount++;
          this.coontLimit += 20;
          this.contragentsList();
          this.getCount = 0;
        }
      });
    });
  },
};
</script>

<style lang="scss">
.multiselect__tags,
input.my__search {
  border: 1px solid #d9d9d9;
  border-radius: 0;
  padding: 11px 45px 11px 14px;
  height: 45px;
  display: flex;
  align-items: center;
}
section.filter {
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.12);
}
.my__search {
  width: 100%;
  outline: none;
  @apply text-bgdarkblue;
}
.multiselect__element span span {
  @apply text-bgdarkblue;
}
.filter__body {
  position: relative;
  background-color: #fff;
  z-index: 10;
  border: 1px solid #ebebeb;
  box-shadow: 0 0 10px rgb(0 0 0 / 11%);
  padding: 30px 0;
}
.multiselect__option {
  white-space: pre-wrap;
}
// change multiselect item hover color
.multiselect__option--highlight {
  background-color: rgb(0, 107, 232);
}
.multiselect__single {
  @apply text-bgdarkblue;
  flex: 1;
  width: 100%;
  max-height: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.my_multiselect {
  .multiselect__tags {
    padding: 8px 16px;
    * {
      margin: 0;
    }
  }
  .multiselect__placeholder {
    padding: 0;
  }
}
</style>
