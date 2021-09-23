import homeTab from './home';
import menuTab from './menu';
import contactTab from './contact';

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

