import { homeTab } from './homeTab';
import { menuTab } from './menuTab';
import { contactTab } from './contactTab';
import { headerModule } from './headerModule';



 //window.onload=function() {
   // homeTab();
   headerModule();
   homeTab();
// }

document.querySelector("#home-link").addEventListener("click", function() {
   homeTab();
});
document.querySelector("#contact-link").addEventListener("click", function() {
    contactTab();
});
document.querySelector("#menu-link").addEventListener("click", function() {
    menuTab();
});

