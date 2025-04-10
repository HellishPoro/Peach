export class CitySwitcher {
  constructor() {
    this.marker = document.querySelector(".city-switcher__marker");
    this.title = document.querySelector(".city-switcher__title");
    this.cities = {
      moscow: { x: "12%", y: "37%" },
      spb: { x: "12%", y: "20%" },
      perm: { x: "32%", y: "30%" },
      vladivostok: { x: "87%", y: "65%" },
      khabarovsk: { x: "84%", y: "60%" },
      irkutsk: { x: "70%", y: "48%" },
      krasnoyarsk: { x: "60%", y: "44%" },
      tomsk: { x: "56%", y: "43%" },
      novosibirsk: { x: "52%", y: "45%" },
      omsk: { x: "47%", y: "46%" },
      tyumen: { x: "44%", y: "42%" },
      surgut: { x: "50%", y: "38%" },
      chelyabinsk: { x: "40%", y: "49%" },
      ekaterinburg: { x: "39%", y: "45%" },
      izhevsk: { x: "35%", y: "42%" },
      ufa: { x: "35%", y: "47%" },
      kazan: { x: "30%", y: "43%" },
      orenburg: { x: "34%", y: "52%" },
      samara: { x: "30%", y: "50%" },
      nizhny_novgorod: { x: "25%", y: "40%" },
      krasnodar: { x: "18%", y: "63%" },
      volgograd: { x: "23%", y: "58%" },
      rostov: { x: "20%", y: "60%" },
      belgorod: { x: "17%", y: "50%" },
      voronezh: { x: "21%", y: "48%" },
      yaroslavl: { x: "21%", y: "35%" },
    };
  }

  switchCity(cityId) {
    const { x, y } = this.cities[cityId];
    this.marker.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    this.marker.style.left = x;
    this.marker.style.top = y;

    this.title.textContent = this.getCityName(cityId);
    this.title.style.animation = "pulse 0.5s";
  }

  getCityName(cityId) {
    const names = {
      moscow: "Москва",
      spb: "Санкт-Петербург",
      perm: "Пермь",
      vladivostok: "Владивосток",
      khabarovsk: "Хабаровск",
      irkutsk: "Иркутск",
      krasnoyarsk: "Красноярск",
      tomsk: "Томск",
      novosibirsk: "Новосибирск",
      omsk: "Омск",
      tyumen: "Тюмень",
      surgut: "Сургут",
      chelyabinsk: "Челябинск",
      ekaterinburg: "Екатеринбург",
      izhevsk: "Ижевск",
      ufa: "Уфа",
      kazan: "Казань",
      orenburg: "Оренбург",
      samara: "Самара",
      nizhny_novgorod: "Нижний Новгород",
      krasnodar: "Краснодар",
      volgograd: "Волгоград",
      rostov: "Ростов-на-Дону",
      belgorod: "Белгород",
      voronezh: "Воронеж",
      yaroslavl: "Ярославль",
    };

    return names[cityId] || "Неизвестный город";
  }
}
