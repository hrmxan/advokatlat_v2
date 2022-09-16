<template>
  <section class="filter pt-4 form-row grid grid-cols-2 -mx-3">
    <div class="col-span-1 px-3 mb-5 my_multiselect">
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
    <div class="col-span-1 px-3 mb-5 my_multiselect">
      <multiselect
        v-model="licenceType"
        :options="licence"
        :custom-label="typeLicence"
        :show-labels="false"
        :placeholder="$t('region')"
      >
        <template slot="noResult">{{ $t("noInfoFound") }}</template>
      </multiselect>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
export default {
  components: {
    Multiselect,
  },
  computed: {
    ...mapState({
      regions: (state) => {
        return state.user.regions;
      },
      licence: (state) => {
        return state.user.licence;
      },
    }),
  },
  data() {
    return {
      licenceType: "",
      viloyat: "",
    };
  },
  watch: {
    licenceType(e) {
      this.$emit("licenceTypeId", e.id);
    },
    viloyat(e) {
      this.$emit("regionId", e.id);
    },
  },
  methods: {
    ...mapActions({
      getRegions: "user/getRegions",
      licenseTypes: "user/licenseTypes",
    }),
    async getStart() {
      await this.getRegions();
      await this.licenseTypes();
    },
    nameRegion(a) {
      return a[`${this.$localeKey("name")}`];
    },
    typeLicence(a) {
      return a[`${this.$localeKey("name")}`];
    },
  },
  created() {
    this.getStart();
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
.multiselect__content-wrapper {
  @apply bg-gray-50 shadow;
}
.my_multiselect {
  .multiselect__tags {
    padding: 8px 16px;
    * {
      margin: 0;
    }
  }
  input {
    outline: none;
  }
  .multiselect__placeholder {
    padding: 0;
  }
}
</style>
