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
document.getElementById("hamburger").addEventListener("click",function() {
   if (navbar.style.display=="none") {
       navbar.style.display="block";
   }
   else {
       navbar.style.display="none";
   }
   
   })

document.querySelector("#home").addEventListener("click", function() {
   homeTab();
});
document.querySelector("#contact").addEventListener("click", function() {
    contactTab();
});
document.querySelector("#menu").addEventListener("click", function() {
    menuTab();
});

