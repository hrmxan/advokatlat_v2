import Vue from 'vue'
import uz from './locates/uz.js';
import ru from './locates/ru.js';
import en from './locates/en.js';
import VueI18n  from "vue-i18n";

Vue.use(VueI18n );
let lang = localStorage.getItem('lang') || 'uz';

const i18n = new VueI18n ({
  locale: lang,
  allowChangingLocale: true,
  messages: {
      en,
      uz,
      ru
  },
  missing: (locale, key) => {
      return `${key} is missing for ${locale}`;
  }
})

export default i18n;