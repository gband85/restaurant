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

  if (window.innerWidth >= 600) {
    hamburger.style.display = "none";
    navList.style.display = "flex";
  } else {
    hamburger.style.display = "inline";
    navList.style.display = "none";
  }
// };

//   global.main = document.createElement("main");

// headerModule();
// homeTab();
// }
// const navbar=document.getElementById("navbar");
// const navList=document.getElementById("nav-list");
//  navList.style.display="none";
document.querySelector("#hamburger").addEventListener("click", function () {
  if (navList.style.display == "none") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 600) {
    hamburger.style.display = "none";
    navList.style.display = "flex";
  } else {
    hamburger.style.display = "inline";
    navList.style.display = "none";
  }
});

document.querySelector("#home").addEventListener("click", function () {
  // if (document.querySelector(".hero")!=null) {
  //   content.removeChild(document.querySelector(".hero"))
  // }
  // content.removeChild(document.querySelector(".container"));
  let page = getTab("home");

  content.appendChild(page);
  // content.appendChild(page.container);
  // document.body.appendChild(content);
  if (window.innerWidth < 600) {
    navList.style.display = "none";
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
    navList.style.display = "none";
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
    navList.style.display = "none";
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
    navList.style.display = "none";
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
    navList.style.display = "none";
  }
});
