import i18n from "@/core/i18n/i18n";

const Util = {
  localeKey(key) {
    return i18n.locale == "lt"
      ? key + "Lt"
      : i18n.locale == "ru"
      ? key + "Ru"
      : i18n.locale == "eng"
      ? key + "En"
      : i18n.locale == "uz"
      ? key + "Uz"
      : "";
  },
};

export default Util;
