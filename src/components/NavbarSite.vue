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
          <li class="flex w-full items-center">
            <router-link class="w-full px-4 py-3" to="/">
              {{ $t("home") }}
            </router-link>
          </li>
          <li class="flex w-full items-center">
            <router-link class="w-full px-4 py-3" to="/news">
              {{ $t("news") }}
            </router-link>
          </li>
          <li class="flex w-full items-center">
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
          <strong class="text-slate font-lato w-52">
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
          <label
            for="lang_input"
            class="langs flex items-center justify-center h-full mr-2 relative cursor-pointer"
          >
            <span
              @click="drobdawn = !drobdawn"
              class="flex items-center justify-center px-5 h-full"
              >{{ lang }}</span
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
export default {
  data() {
    return {
      scrolHeader: false,
      colapse: false,
      lang: "Uz",
      langs: ["uz", "en", "ru"],
      drobdawn: true,
      sidebarColapse: false,
    };
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
    routeHome() {
      this.$router.push("/");
    },
    changeLang(l) {
      localStorage.setItem("lang", l);
      this.$i18n.locale = l;
      this.lang = this.$t(`langs.${l}`);
      this.drobdawn = true;
    },
  },
  created() {
    this.lang = this.$t(`langs.${this.$i18n.locale}`);
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
.border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: none;
  border-right: none;
  border-top: none;
}
.tools {
  height: 84px;
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
