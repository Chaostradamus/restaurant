import { loadPage } from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

function tabs() {
  const home = document.getElementById("home");
  const menu = document.getElementById("menu");
  const about = document.getElementById("about");

  home.addEventListener("click", () => {
    loadPage();
  });

  menu.addEventListener("click", () => {
    menuPage();
  });

  about.addEventListener("click", () => {
    aboutPage();
  });
}

window.onload = () => {
  loadPage();
  tabs()
};
