const localeKey = function (key = "name", locale = "en") {
  return locale == "lt"
    ? key + "Lt"
    : locale == "ru"
    ? key + "Ru"
    : locale == "en"
    ? key + "En"
    : locale == "uz"
    ? key + "Uz"
    : "";
};

export default localeKey;
