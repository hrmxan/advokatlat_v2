<template>
  <header class="fixed w-full">
    <div class="sidebar" :class="{ open: sidebarColapse }">
      <div @click="sidebarColapse = false" class="mask"></div>
      <div class="body relative">
        <div class="krestik">
          <a @click.prevent="sidebarColapse = false" href="#!" class="mr-4">
            <img class="w-5" src="@/assets/img/krestik.png" />
          </a>
        </div>
        <ul class="flex flex-col">
          <li @click="sidebarColapse = false" class="flex w-full items-center">
            <router-link class="w-full px-4 py-3" to="/">
              {{ $t("home") }}
            </router-link>
          </li>
          <li @click="sidebarColapse = false" class="flex w-full items-center">
            <router-link class="w-full px-4 py-3" to="/news">
              {{ $t("news") }}
            </router-link>
          </li>
          <li @click="sidebarColapse = false" class="flex w-full items-center">
            <router-link class="w-full px-4 py-3" to="/lawyers">
              {{ $t("lawyers") }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <nav :class="{ 'bg-base navscroll': scrolHeader }" class="border">
      <div class="container px-3 mx-auto flex items-center justify-between">
        <a href="#" @click.prevent="routeHome" class="flex items-center">
          <img src="@/assets/img/logo.png" class="w-8 mr-2" />
          <strong class="text-slate font-lato w-52 logo-text">
            {{ $t("ORAV") }}
          </strong>
        </a>
        <div class="hidden md:flex navBar flex-grow">
          <ul class="">
            <li>
              <router-link to="/">
                {{ $t("home") }}
              </router-link>
            </li>
            <li>
              <router-link to="/news">
                {{ $t("news") }}
              </router-link>
            </li>
            <li>
              <router-link to="/lawyers">
                {{ $t("lawyers") }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="tools flex items-center">
          <div v-if="!drobdawn" @click="drobdawn = true" class="dropdwon__mask"></div>
          <label
            for="lang_input"
            class="langs flex items-center justify-center h-full mr-2 relative cursor-pointer"
          >
            <img class="w-5" :src="require(`@/assets/img/${lang}.png`)" />
            <span
              @click="drobdawn = !drobdawn"
              class="flex items-center justify-center pr-5 pl-2 h-full"
              >{{ $t(`langs.${lang}`) }}</span
            >
            <div class="drobdawn absolute top-full right-0" :class="{ close: drobdawn }">
              <ul class="flex flex-col">
                <li
                  v-for="(l, index) in langs"
                  :key="index"
                  class="flex items-center my-2 mx-4"
                >
                  <a @click.prevent="changeLang(l)" href="#!" class="flex items-center">
                    <img class="w-5 mr-2" :src="require(`@/assets/img/${l}.png`)" />
                    {{ $t(`langs.${l}`) }}
                  </a>
                </li>
              </ul>
            </div>
          </label>
          <a
            @click.prevent="openOneId"
            class="flex items-center h-full p-2 ml-2"
            href="https://id.egov.uz/?client_id=e-advokat&token_id=538b3314-4e81-4171-8366-4fa02c0390d4&method=IDPW"
          >
            <span v-if="!user">{{ $t("logIn") }}</span>
            <span
              class="flex items-center border-2 p-1 rounded-sm text-baseyellow border-baseyellow"
              v-else
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#c0cf13"
                class="bi bi-person-circle mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              {{ user }}
            </span>
          </a>
          <a
            @click.prevent="sidebarColapse = true"
            href="#!"
            class="flex w-8 h-6 sidebarOpen md:hidden"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      scrolHeader: false,
      colapse: false,
      lang: "Uz",
      langs: ["uz", "en", "ru"],
      drobdawn: true,
      sidebarColapse: false,
      WinPrint: null,
    };
  },
  computed: {
    ...mapState({
      user: (state) => {
        return state.user.userData.userLogin;
      },
    }),
  },
  methods: {
    scrolingHeader() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          this.scrolHeader = true;
        } else {
          this.scrolHeader = false;
        }
      });
    },
    openOneId() {
      this.WinPrint = window.open(
        "https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=e-advokat&redirect_uri=http://localhost:1000/oneId&scope=e-advokat&state=eyJtZXRob2QiOiJJRFBXIn0=",
        "_self",
        "One Id",
        "left=0,top=0,width=1000,height=1000,toolbar=0,scrollbars=0,status=0"
      );
      console.log("WinPrint bu", this.WinPrint);
      // this.WinPrint = window.open(
      //   "https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=e-advokat&redirect_uri=https://e-advokat.uz/oneId&scope=e-advokat&state=eyJtZXRob2QiOiJJRFBXIn0=",
      //   "_self",
      //   "One Id",
      //   "left=0,top=0,width=1000,height=1000,toolbar=0,scrollbars=0,status=0",
      // );
    },
    routeHome() {
      this.$router.push("/");
    },
    changeLang(l) {
      localStorage.setItem("lang", l);
      this.$i18n.locale = l;
      this.lang = l;
      this.drobdawn = true;
    },
  },
  created() {
    this.lang = this.$i18n.locale;
  },
  mounted() {
    this.scrolingHeader();
  },
};
</script>

<style scoped lang="scss">
* {
  color: #f8fafc;
}
header {
  z-index: 200;
}

.dropdwon__mask {
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: none;
  border-right: none;
  border-top: none;
}
.tools {
  height: 84px;
}
.logo-text {
  display: flex;
  @media (max-width: 410px) {
    display: none;
  }
}
.drobdawn {
  background: #48a8c0;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border: none;
  right: 0px;
  margin: 0px;
  min-width: 110px;
  border-radius: 0px;
  visibility: visible;
  &.close {
    visibility: hidden;
  }
}
.navscroll {
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
}

nav {
  transition: 0.5s ease;
}
.logo {
  strong {
    line-height: 16px;
    font-size: 16px;
  }
}
.navBar {
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
        &:hover {
          background-color: #48a8c0;
        }
      }
    }
  }
}
.router-link-exact-active {
  background-color: #48a8c0;
}
.sidebarOpen {
  flex-direction: column;
  justify-content: space-between;
  span {
    height: 2px;
    width: 100%;
    border-radius: 10px;
    @apply bg-baseyellow;
  }
}
.sidebar {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 100%;
  width: 300px;
  height: 100vh;
  z-index: 200;
  transform: translateX(0);
  visibility: visible;
  transition: 0.5s ease;
  .krestik {
    display: flex;
    height: 84px;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .body {
    width: 100%;
    @apply bg-base;
    transition: 0.5s ease;
    // box shadow left
    box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 0.2);
  }
  .mask {
    display: flex;
    position: absolute;
    top: 0;
    right: 100%;
    width: 100vw;
    height: 100%;
    background: rgba(0, 89, 171, 0.16);
    backdrop-filter: blur(5px);
    transition: 0.5s ease;
    opacity: 0;
    visibility: hidden;
  }
  &.open {
    .body {
      transform: translateX(-100%);
    }
    .mask {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
