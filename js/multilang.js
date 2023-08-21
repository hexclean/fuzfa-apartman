const langEn = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
let localLang = localStorage.getItem("language");

const title1 = document.querySelector(".changeName");
const menuWelcome = document.querySelector(".menuWelcome");
const menuShopping = document.querySelector(".menuShopping");
const menuPrograms = document.querySelector(".menuPrograms");
const menuGift = document.querySelector(".menuGift");
const welcomeTitle = document.querySelector(".welcomeTitle");
const welcome_text1 = document.querySelector(".welcome_text1");
const welcome_text2 = document.querySelector(".welcome_text2");

var data = {
  english: {
    titleTest: "Willow Apartment",
    menuWelcome: "Welcome",
    menuShopping: "Shopping",
    menuPrograms: "Programs",
    menuGift: "Gift",
    welcomeTitle: "Welcome to!",
    welcome_text1:
      "We are delighted that you have arrived. We will do our best to make your stay here a pleasant and memorable one. We are at your disposal for any questions you may have.",
    welcome_text2: "We wish you all the best,",
  },
  hungarian: {
    titleTest: "Fűzfa Apartman",
    menuWelcome: "Üdvözlet",
    menuShopping: "Boltok",
    menuPrograms: "Programok",
    menuGift: "Ajándék",
    welcomeTitle: "Szeretettel üdvözlünk!",
    welcome_text1:
      "Nagy öröm számunkra, hogy megérkeztetek. Mindent megteszünk azért, hogy itt tartózkodásotok kellemes és emlékezetes legyen. Köszönjük, hogy minket választottatok.",
    welcome_text2: "Legjobbakat kívánunk,",
  },
  romanian: {
    titleTest: "Apartament Fűzfa",
    menuWelcome: "...",
    menuShopping: "...",
    menuPrograms: "...",
    menuGift: "...",
    welcomeTitle: "...",
    welcome_text1: "...",
    welcome_text2: "...",
  },
};

if (localLang == null) {
  localStorage.setItem("language", "hungarian");
  let localLangFin = localStorage.getItem("language");

  title1.textContent = data[localLangFin].titleTest;
  menuWelcome.textContent = data[localLangFin].menuWelcome;
  menuShopping.textContent = data[localLangFin].menuShopping;
  menuPrograms.textContent = data[localLangFin].menuPrograms;
  menuGift.textContent = data[localLangFin].menuGift;
  welcomeTitle.textContent = data[localLangFin].welcomeTitle;
  welcome_text1.textContent = data[localLangFin].welcome_text1;
  welcome_text2.textContent = data[localLangFin].welcome_text2;
} else {
  title1.textContent = data[localLang].titleTest;
  menuWelcome.textContent = data[localLang].menuWelcome;
  menuShopping.textContent = data[localLang].menuShopping;
  menuPrograms.textContent = data[localLang].menuPrograms;
  menuGift.textContent = data[localLang].menuGift;
  welcomeTitle.textContent = data[localLang].welcomeTitle;
  welcome_text1.textContent = data[localLang].welcome_text1;
  welcome_text2.textContent = data[localLang].welcome_text2;
}

link.forEach((el) => {
  el.addEventListener("click", () => {
    const attr = el.getAttribute("language");
    localStorage.setItem("language", attr);

    title1.textContent = data[attr].titleTest;
    menuWelcome.textContent = data[attr].menuWelcome;
    menuShopping.textContent = data[attr].menuShopping;
    menuPrograms.textContent = data[attr].menuPrograms;
    menuGift.textContent = data[attr].menuGift;
    welcomeTitle.textContent = data[attr].welcomeTitle;
    welcome_text1.textContent = data[attr].welcome_text1;
    welcome_text2.textContent = data[attr].welcome_text2;
  });
});
