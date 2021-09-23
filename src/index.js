import homeTab from './homeTab';
import menuTab from './menuTab';
import contactTab from './contactTab';

window.onload=function() {
    homeTab();
}
document.querySelector("#home").addEventListener("click", function() {
    homeTab();
});
document.querySelector("#contact").addEventListener("click", function() {
    contactTab();
});
document.querySelector("#menu").addEventListener("click", function() {
    menuTab();
});

