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
const welcome_text3 = document.querySelector(".welcome_text3");
const checkInOut = document.querySelector(".checkInOut");
const checkIn = document.querySelector(".checkIn");
const checkOut = document.querySelector(".checkOut");
const checkOut2 = document.querySelector(".checkOut2");
const impInfo = document.querySelector(".impInfo");
const impInfo1 = document.querySelector(".impInfo1");
const wifiInfo = document.querySelector(".wifiInfo");
const wifiName = document.querySelector(".wifiName");
const wifiPsw = document.querySelector(".wifiPsw");
const coldWater = document.querySelector(".coldWater");
const coldWaterDesc = document.querySelector(".coldWaterDesc");
const smokingTitle = document.querySelector(".smokingTitle");
const smokingDescription = document.querySelector(".smokingDescription");

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
    welcome_text3: "Tünde és Jócó!",
    checkInOut: "Check-in and check-out",
    checkIn: "Check-in: from 13:00 to midnight",
    checkOut: "Check-out: between 6:00 and 12:00",
    checkOut2:
      "If you wish to stay after check-out, a left-luggage office will be provided.",
    impInfo: "Important information",
    impInfo1:
      "Let us share with you some useful information to make your stay even more comfortable:",
    wifiInfo: "WiFi Information:",
    wifiName: "Name: Fuzfa Apartman",
    wifiPsw: "Password: fuzfaapartman2023",
    coldWater: "Hot water usage:",
    coldWaterDesc:
      "Hot water comes from solar collectors. When you want to use it, you need to leave a few minutes for the hot water to warm up.",
    smokingTitle: "Smoking:",
    smokingDescription: "If you smoke, you can smoke on the balcony.",
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
    welcome_text3: "Tünde és Jócó!",
    checkInOut: "Bejelentkezés és kijelentkezés",
    checkIn: "Bejelentkezés: 13:00-tól éjfélig",
    checkOut: "Kijelentkezés: 6:00 és 12:00 óra között",
    checkOut2:
      "Amennyiben a kijelentkezés után még maradnál, biztosítunk csomagmegőrzési lehetőséget.",
    impInfo: "Fontos tudnivalók",
    impInfo1:
      "Engedj meg, hogy megosszunk veled néhány hasznos információt, hogy tartózkodásod még kényelmesebb legyen:",
    wifiInfo: "WiFi Információk:",
    wifiName: "Név: Fuzfa Apartman",
    wifiPsw: "Jelszó: fuzfaapartman2023",
    coldWater: "Melegvíz használat:",
    coldWaterDesc:
      "A melegvíz napkollektorokból érkezik. Amikor használni szeretnéd, néhány percet várnod kell, hogy a víz meleg legyen.",
    smokingTitle: "Dohányzás:",
    smokingDescription: "Ha dohányoznál, az erkélyen van erre lehetőség.",
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
    welcome_text2: "Tünde és Jócó!",
    checkInOut: "...",
    checkIn: "...",
    checkOut: "...",
    checkOut2: "...",
    impInfo: "...",
    impInfo1: "...",
    wifiInfo: "...",
    wifiName: "...",
    wifiPsw: "...",
    coldWater: "...",
    coldWaterDesc: "...",
    smokingTitle: "...",
    smokingDescription: "...",
  },
};

if (localLang == null) {
  localStorage.setItem("language", "hungarian");
} else {
  let localLang = localStorage.getItem("language");
  title1.textContent = data[localLang].titleTest;
  menuWelcome.textContent = data[localLang].menuWelcome;
  menuShopping.textContent = data[localLang].menuShopping;
  menuPrograms.textContent = data[localLang].menuPrograms;
  menuGift.textContent = data[localLang].menuGift;
  welcomeTitle.textContent = data[localLang].welcomeTitle;
  welcome_text1.textContent = data[localLang].welcome_text1;
  welcome_text2.textContent = data[localLang].welcome_text2;
  welcome_text3.textContent = data[localLang].welcome_text3;
  checkInOut.textContent = data[localLang].checkInOut;
  checkIn.textContent = data[localLang].checkIn;
  checkOut.textContent = data[localLang].checkOut;
  checkOut2.textContent = data[localLang].checkOut2;
  impInfo.textContent = data[localLang].impInfo;
  impInfo1.textContent = data[localLang].impInfo1;
  wifiInfo.textContent = data[localLang].wifiInfo;
  wifiName.textContent = data[localLang].wifiName;
  wifiPsw.textContent = data[localLang].wifiPsw;
  coldWater.textContent = data[localLang].coldWater;
  coldWaterDesc.textContent = data[localLang].coldWaterDesc;
  smokingTitle.textContent = data[localLang].smokingTitle;
  smokingDescription.textContent = data[localLang].smokingDescription;
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
    welcome_text3.textContent = data[attr].welcome_text3;
    checkInOut.textContent = data[attr].checkInOut;
    checkIn.textContent = data[attr].checkIn;
    checkOut.textContent = data[attr].checkOut;
    checkOut2.textContent = data[attr].checkOut2;
    impInfo.textContent = data[attr].impInfo;
    impInfo1.textContent = data[attr].impInfo1;
    wifiInfo.textContent = data[attr].wifiInfo;
    wifiName.textContent = data[attr].wifiName;
    wifiPsw.textContent = data[attr].wifiPsw;
    coldWater.textContent = data[attr].coldWater;
    coldWaterDesc.textContent = data[attr].coldWaterDesc;
    smokingTitle.textContent = data[attr].smokingTitle;
    smokingDescription.textContent = data[attr].smokingDescription;
  });
});