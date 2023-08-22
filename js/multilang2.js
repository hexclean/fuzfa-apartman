const link2 = document.querySelectorAll("a");
let localLang2 = localStorage.getItem("language");
let scripts = document.getElementsByTagName("script");

let run2 = false;
for (let i = 0, len = scripts.length; i < len; i++) {
  let src = scripts[i].getAttribute("src").split("?");
  let args = src[1];
  if (args != undefined) {
    if (args == "name=shop") {
      run2 = true;
    }
    console.log("scripts: ", args);
  }
}
console.log("run2: ", run2);

const menuWelcome2 = document.querySelector(".menuWelcome2");
const menuShopping2 = document.querySelector(".menuShopping2");
const menuPrograms2 = document.querySelector(".menuPrograms2");
const menuGift2 = document.querySelector(".menuGift2");

var data = {
  english: {
    menuWelcome2: "Welcome",
    menuShopping2: "Shopping",
    menuPrograms2: "Programs",
    menuGift2: "Gift",
    sarkiTitle: "Shop just a few steps away",
  },
  hungarian: {
    menuWelcome2: "Üdvözlet",
    menuShopping2: "Boltok",
    menuPrograms2: "Programok",
    menuGift2: "Ajándék",
    sarkiTitle: "Pár lépésre levő üzlet",
  },
  romanian: {
    menuWelcome2: "...",
    menuShopping2: "...",
    menuPrograms2: "...",
    menuGift2: "...",
    sarkiTitle: "...",
  },
};

if (localLang2 == null) {
  localStorage.setItem("language", "hungarian");
} else {
  let localLang2 = localStorage.getItem("language");
  menuWelcome2.textContent = data[localLang2].menuWelcome2;
  menuShopping2.textContent = data[localLang2].menuShopping2;
  menuPrograms2.textContent = data[localLang2].menuPrograms2;
  menuGift2.textContent = data[localLang2].menuGift2;
  sarkiTitle.textContent = data[localLang2].sarkiTitle;
}

link2.forEach((el) => {
  el.addEventListener("click", () => {
    const attr = el.getAttribute("language");
    localStorage.setItem("language", attr);

    menuWelcome2.textContent = data[attr].menuWelcome2;
    menuShopping2.textContent = data[attr].menuShopping2;
    menuPrograms2.textContent = data[attr].menuPrograms2;
    menuGift2.textContent = data[attr].menuGift2;
    sarkiTitle.textContent = data[attr].sarkiTitle;
  });
});
