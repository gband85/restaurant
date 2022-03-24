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
// const navbar=document.getElementById("navbar");
// const navList=document.getElementById("nav-list");
navList.style.display="none";
document.getElementById("hamburger").addEventListener("click",function() {
   if (navList.style.display=="none") {
       navList.style.display="flex";
   }
   else {
       navList.style.display="none";
   }
   })

document.querySelector("#home").addEventListener("click", function() {
   homeTab();
});
document.querySelector("#menu").addEventListener("click", function() {
    menuTab();
});
document.querySelector("#contact").addEventListener("click", function() {
    contactTab();
});


