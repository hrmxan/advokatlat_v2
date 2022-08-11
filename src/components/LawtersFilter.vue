<template>
  <section class="filter mb-5 pb-5 -mt-6">
    <div class="container mx-auto px-3">
      <form>
        <div class="form-row grid grid-cols-1 sm:grid-cols-3 -mx-3">
          <div class="col-span-1 sm:col-span-3 px-3 mb-5 my_multiselect">
            <input :placeholder="$t('FIO')" class="my__search" type="text" />
          </div>
          <div class="col-span-1 px-3 my_multiselect my-3">
            <multiselect
              v-model="viloyat"
              :options="options"
              :custom-label="nameWithLang"
              :show-labels="false"
              :placeholder="$t('region')"
            >
              <template slot="noResult">{{ $t("noInfoFound") }}</template>
            </multiselect>
          </div>
          <div class="col-span-1 px-3 my_multiselect my-3">
            <multiselect
              v-model="tashkilot"
              :options="optionsTashkilot"
              :custom-label="nameWithLang"
              :show-labels="false"
              :placeholder="$t('organization')"
            >
              <template slot="noResult">{{ $t("noInfoFound") }}</template>
            </multiselect>
          </div>
          <div class="col-span-1 px-3 my_multiselect my-3">
            <multiselect
              v-model="mutahasislik"
              :options="optionsMutahasislik"
              :custom-label="nameWithLang"
              :show-labels="false"
              :placeholder="$t('specialization')"
              :max-height="250"
              @scroll="onScroll"
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
      optionsMutahasislik: [
        { name: "Mutahasislik1", value: "mutahasislik1" },
        { name: "Mutahasislik2", value: "mutahasislik2" },
        { name: "Mutahasislik3", value: "mutahasislik3" },
        { name: "Mutahasislik4", value: "mutahasislik4" },
        { name: "Mutahasislik5", value: "mutahasislik5" },
        { name: "Mutahasislik6", value: "mutahasislik6" },
        { name: "Mutahasislik7", value: "mutahasislik7" },
        { name: "Mutahasislik8", value: "mutahasislik8" },
        { name: "Mutahasislik9", value: "mutahasislik9" },
        { name: "Mutahasislik10", value: "mutahasislik10" },
        { name: "Mutahasislik11", value: "mutahasislik11" },
        { name: "Mutahasislik12", value: "mutahasislik12" },
        { name: "Mutahasislik13", value: "mutahasislik13" },
        { name: "Mutahasislik14", value: "mutahasislik14" },
        { name: "Mutahasislik15", value: "mutahasislik15" },
        { name: "Mutahasislik16", value: "mutahasislik16" },
        { name: "Mutahasislik17", value: "mutahasislik17" },
      ],
      isVisible: false,
      getCount: 0,
    };
  },
  methods: {
    nameWithLang({ name }) {
      return `${name}`;
    },
    onScroll(e) {
      console.log(e);
    },
  },
  mounted() {
    let scrolWrap = document.querySelectorAll(".multiselect__content-wrapper");
    scrolWrap.forEach((item) => {
      item.addEventListener("scroll", () => {
        let sb = item.querySelector(".multiselect__content");
        if (+item.offsetHeight + item.scrollTop >= sb.offsetHeight && this.getCount < 1) {
          this.getCount++;
          this.optionsMutahasislik = [
            ...this.optionsMutahasislik,
            ...this.optionsMutahasislik,
          ];
          this.getCount = 0;
          console.log(this.optionsMutahasislik);
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
// change multiselect item hover color
.multiselect__option--highlight {
  background-color: rgb(0, 107, 232);
}
.multiselect__single {
  @apply text-bgdarkblue;
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
