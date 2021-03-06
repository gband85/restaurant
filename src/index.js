import { homeTab } from "./homeTab";
import { menuTab } from "./menuTab";
import { contactTab } from "./contactTab";
import { headerModule } from "./headerModule";
import { reviewsTab } from "./reviewsTab";
import { photosTab } from "./photosTab";
// import "./solid.min";
// import "./fontawesome.min";
import './fontawesome.min.css';
import './solid.min.css';
import "./style.css";

function getTab(tab) {
  let page;
  switch (tab) {
    case "home":
      page = homeTab();
      break;
    case "menu":
      page = menuTab();
      break;
    case "reviews":
      page = reviewsTab();
      break;
    case "photos":
      page = photosTab();
      break;
    case "contact":
      page = contactTab();
      break;
  }
  return page;
}
// window.onload = function () {
  const content = document.createElement("div");
  content.id = "content";
  const header = headerModule();
  content.appendChild(header);
  
  let page = getTab("home");

  content.appendChild(page.hero);
  content.appendChild(page.container);
  document.body.appendChild(content);
  const navList=document.querySelector(".nav-list");
  const hamburger= document.querySelector("#hamburger")

  if (window.innerWidth >= 600) {
    hamburger.style.display = "none";
    navList.classList.add("desktop");
    navList.classList.remove("hide")
  } else {
    hamburger.style.display = "inline";
    navList.classList.remove("desktop")
    navList.classList.add("hide")
  }
// };

//   global.main = document.createElement("main");

// headerModule();
// homeTab();
// }
// const navbar=document.getElementById("navbar");
// const navList=document.getElementById("nav-list");
//  navList.style.display="none";

hamburger.addEventListener("click", function () {
navList.classList.toggle("hide");
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 600) {
    hamburger.style.display = "none";
    navList.classList.remove("hide")
    navList.classList.add("desktop")
    //navList.style.display = "flex";
  } else {
    hamburger.style.display = "inline";
    //unset transition, hide menu,set transition
    navList.style.transition="unset";
    setTimeout(function(){
navList.style.transition="all .5s ease-in-out"
    },100)
    navList.classList.add("hide")
    navList.classList.remove("desktop")
  }
});

document.querySelector("#home").addEventListener("click", function () {
  //remove hero if it exists
  if (document.querySelector(".hero")!=null) {
    content.removeChild(document.querySelector(".hero"))
  }
  content.removeChild(document.querySelector(".container"));
  let page = getTab("home");

  content.appendChild(page.hero);
  content.appendChild(page.container);
  document.body.appendChild(content);
  if (window.innerWidth < 600) {
    navList.classList.add("hide")
  }
});
document.querySelector("#menu").addEventListener("click", function () {
  if (document.querySelector(".hero")!=null) {
    content.removeChild(document.querySelector(".hero"))
  }
  content.removeChild(document.querySelector(".container"));
  let page=getTab("menu");
  content.appendChild(page);
  document.body.appendChild(content);
  // menuTab();
  if (window.innerWidth < 600) {
    navList.classList.add("hide")
  }
});
document.querySelector("#reviews").addEventListener("click", function () {
  if (document.querySelector(".hero")!=null) {
    content.removeChild(document.querySelector(".hero"))
  };
  content.removeChild(document.querySelector(".container"));
  let page=getTab("reviews");
    content.appendChild(page);
  document.body.appendChild(content);
  if (window.innerWidth < 600) {
    navList.classList.add("hide")
  }
});
document.querySelector("#photos").addEventListener("click", function () {
  if (document.querySelector(".hero")!=null) {
    content.removeChild(document.querySelector(".hero"))
  }
  content.removeChild(document.querySelector(".container"));
  let page = getTab("photos");
  content.appendChild(page);
  document.body.appendChild(content);
  if (window.innerWidth < 600) {
    navList.classList.add("hide")
  }
});
document.querySelector("#contact").addEventListener("click", function () {
  if (document.querySelector(".hero")!=null) {
    content.removeChild(document.querySelector(".hero"))
  }
  content.removeChild(document.querySelector(".container"));
  let page=getTab("contact")
  content.appendChild(page);;
  document.body.appendChild(content);
  if (window.innerWidth < 600) {
    navList.classList.add("hide")
  }
});
