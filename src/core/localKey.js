const localeKey = function (key = "name", locale = "en") {
  return locale == "lt"
    ? key + "Lt"
    : locale == "ru"
    ? key + "Ru"
    : locale == "en"
    ? key + "En"
    : locale == "uz"
    ? key + "Lt"
    : "";
};

export default localeKey;
