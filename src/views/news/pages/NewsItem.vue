<template>
  <main>
    <section class="nav_mask pt-28">
      <div class="container mx-auto px-3">
        <h1 class="title">{{ news[`${localLang("title")}`] }}</h1>
        <!-- <p class="data postdata">JULY 29, 2022</p>
        <p class="from postdata">FIRM MEMORANDA</p> -->
      </div>
    </section>
    <section>
      <div class="text-content container mx-auto px-3 py-10">
        <p class="max-w-lg text-bgdarkblue" v-html="news[`${localLang('text')}`]"></p>
      </div>
    </section>
  </main>
</template>

<script>
import news from "@/services/directory-post.service";
import localeKey from "@/core/localKey";

export default {
  data() {
    return {
      news: {},
    };
  },
  methods: {
    async getById(id) {
      let data = await news.getById(id);
      this.news = data.data;
    },
    localeKey,
    localLang(key) {
      return this.localeKey(key, this.$i18n.locale);
    },
  },
  created() {
    this.getById(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
section.nav_mask {
  background-image: url("@/assets/img/header-bgfull.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
  @media (max-width: 991.98px) {
    padding: 120px 0px 40px;
    min-height: 400px;
  }
}
p.text-content {
  @apply max-w-lg text-bgdarkblue;
}
p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.45;
}
h2 {
  font-size: calc(18px + 0 * ((100vw - 350px) / 850));
  font-weight: bold;
}
h1 {
  margin-bottom: 20px;
  letter-spacing: 0;
  word-spacing: 0.2px;
  font-weight: 300;
  line-height: 48px;
  color: #ffffff;
  font-size: calc(38px + 7 * ((100vw - 350px) / 850));
}
p.postdata {
  color: #b6b6b6;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 12px;
}
</style>
