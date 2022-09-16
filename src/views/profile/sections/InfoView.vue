<template>
  <main>
    <section class="nav_mask"></section>
    <div class="container px-3 my-8 mx-auto">
      <div class="info__card px-2 pt-3 pb-5">
        <div
          class="info__row top border-b-2 border-solid border-baseblue flex items-center flex-wrap pb-2 px-7 mb-2"
        >
          <strong>To'liq ismi:</strong>

          <p class="pl-8">{{ userData.fullName }}</p>
          <div class="button flex-grow text-right">
            <button @click.prevent="logaut" class="outline-none border-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#48A8C0"
                class="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <table class="table-auto">
          <tbody>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>Pasport:</strong></td>
              <td>
                <p>{{ userData.passportNumber }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>Pasport berilgan sana:</strong></td>
              <td>
                <p>{{ userData.passportGivenDate }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td>
                <strong class="pt-2">Pasport amal qilish muddati:</strong>
              </td>
              <td>
                <p>{{ userData.passportEndDate }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>JSHSHIR:</strong></td>
              <td>
                <p>{{ userData.inps }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>INN:</strong></td>
              <td>
                <p>{{ userData.inn }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>Tug'ilgan davlati:</strong></td>
              <td>
                <p>{{ userData.birthCountry }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>Tug'ilgan joyi:</strong></td>
              <td>
                <p>{{ userData.birthDistrict }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>Millati:</strong></td>
              <td>
                <p>{{ userData.nationality }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>Elektron pochtasi:</strong></td>
              <td>
                <p>{{ userData.email }}</p>
              </td>
            </tr>
            <tr class="info__row hover:bg-base hover:bg-opacity-5">
              <td><strong>Telefon raqami:</strong></td>
              <td>
                <p>{{ userData.mobilePhone }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import apiService from "@/services/api.service";
import { TokenService } from "@/services/store.service";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      userData: (state) => {
        return state.user.userData;
      },
    }),
  },
  methods: {
    ...mapActions({
      getDataUser: "user/getDataUser",
    }),
    ...mapMutations({
      setUserData: "user/setUserData",
    }),
    async getUser() {
      await this.getDataUser();
    },
    logaut() {
      apiService.removeHeader();
      this.setUserData({});
      TokenService.getToken();
      this.$router.push({ path: "./" });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
section.nav_mask {
  height: 84px;
  background-image: url("@/assets/img/header-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
td {
  @apply py-1;
  &:first-child {
    @apply pl-7;
  }
  &:last-child {
    @apply pr-7;
  }
}
tr {
  @apply my-1;
}
.info__card {
  border-top: 4px solid #c0cf13;
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: 0.5s ease;
  &:hover {
    box-shadow: 0 2px 30px 0 rgb(0 0 0 / 20%);
    border-top-color: #48a8c0;
  }
  .info__row {
    color: #3f4254;
    strong {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
    &.top {
      strong {
        font-size: 30px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
</style>
