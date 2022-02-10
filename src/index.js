import { homeTab } from './homeTab';
import { menuTab } from './menuTab';
import { contactTab } from './contactTab';
import { headerModule } from './headerModule';
import './style.css';


 //window.onload=function() {
   // homeTab();
   global.content = document.querySelector("#content");
  global.main = document.createElement("main");

   headerModule();
   homeTab();
// }
const navbar=document.getElementById("navbar");
const navList=document.getElementById("nav-list");
// document.getElementById("hamburger").addEventListener("click",function() {
//    if (navList.style.display=="none") {
//        navList.style.display="flex";
      
//     //    navbar.style.flexWrap="wrap"
//    }
//    else if (navList.style.display=='') {
//        navList.style.display="none";
//    }
//    else {
//        navList.style.display="none";
//    }
//    })

document.querySelector("#home").addEventListener("click", function() {
   homeTab();
});
document.querySelector("#contact").addEventListener("click", function() {
    contactTab();
});
document.querySelector("#menu").addEventListener("click", function() {
    menuTab();
});

