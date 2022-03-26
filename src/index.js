import { homeTab } from './homeTab';
import { menuTab } from './menuTab';
import { contactTab } from './contactTab';
import { headerModule } from './headerModule';
import './style.css';


 window.onload=function() {
   // homeTab();
   if (window.innerWidth>=500) {
    hamburger.style.display="none";
    navList.style.display="flex";
       }
       else {
        hamburger.style.display="block";
        navList.style.display="none";
       }
 }
   global.content = document.querySelector("#content");
  global.main = document.createElement("main");

   headerModule();
   homeTab();
// }
// const navbar=document.getElementById("navbar");
// const navList=document.getElementById("nav-list");
 navList.style.display="none";
hamburger.addEventListener("click",function() {
   if (navList.style.display=="none") {
       navList.style.display="flex";
   }
   else {
       navList.style.display="none";
   }
   })

window.addEventListener("resize", function() {
   if (window.innerWidth>=500) {
hamburger.style.display="none";
navList.style.display="flex";
   }
   else {
    hamburger.style.display="block";
    navList.style.display="none";
   }
})

document.querySelector("#home").addEventListener("click", function() {
   homeTab();
//    if (hamburger.style.display="block") {
//        navList.style.display="none"
//    }
});
document.querySelector("#menu").addEventListener("click", function() {
    menuTab();
    // if (hamburger.style.display="block") {
    //     navList.style.display="none"
    // }
});
document.querySelector("#contact").addEventListener("click", function() {
    contactTab();
    // if (hamburger.style.display="block") {
    //     navList.style.display="none"
    // }
});


