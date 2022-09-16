<template>
  <main>
    <section class="nav_mask"></section>
    <div class="container px-3 my-8 mx-auto">
      <div class="info__card px-2 pt-3 pb-5">
        <div
          class="info__row top border-b-2 border-solid border-baseblue flex items-center flex-wrap pb-2 px-7 mb-2"
        >
          <strong class="pt-2">To'liq ismi:</strong>

          <p class="pt-2 pl-8">{{ userData.fullName }}</p>
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
import { mapActions, mapState } from "vuex";
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
    async getUser() {
      await this.getDataUser();
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
