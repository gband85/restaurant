(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var d=t(81),r=t.n(d),o=t(645),a=t.n(o)()(r());a.push([e.id,"\n\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\nbody, html {\n    background-color: lightslategrey;\n    font-family: 'Merriweather Sans', sans-serif;\n}\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#navbar ul li {\n    display: inline-block;\n    padding: 10px 30px;\n    border-top: 3px solid white;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    margin: 0 10px;\n    cursor: pointer;\n}\n/* #hours {\n\n    padding: 30px;\n} */\n#hours-table {\n    /* border: 2px solid black; */\n    /* border-collapse: collapse; */\n    border-spacing: 60px 10px;\n    /* margin: 0 auto; */\n}\n#hours-table td {\n    /* border: 2px solid black; */\n    /* margin-right: 30px; */\n    width: 100px;\n    text-align: center;\n}\n#navbar ul li a {\n    text-decoration: none;\n}\n#navbar ul li a:visited {\ncolor: white;\n}\n#header {\n    background-color: black;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    height: 60px;\n    margin-bottom: 50px;\n    color: white;\n}\n#navbar ul {\n    list-style: none;\n}\n.selected {\n    background-color: blue;\n}\n#home-div, #contact-div, #menu-div {\n    /* display: flex; */\n    flex-direction: column;\n    align-items: center;\n    padding: 5px;\n    /* border: solid black 2px; */\n    justify-content: space-evenly;\n}\n #contact-div > div {\nborder: solid lightgrey 1px;\nmargin: 20px; \npadding: 20px;\nbackground-color: white;\n} \n#home-div  div {\n    border: solid lightgray 1px;\n    margin: 20px;\n    background-color: white;\n    padding: 20px;\n}\n#menu-div > div {\n    border: solid lightgrey 1px;\n    margin: 20px;\n    padding: 30px;\n    background-color: white;\n}\n.menu-section p {\n/* margin-top: 30px; */\n}\n.menu-title {\n    text-align: center;\n}\n.menu-section {\n    /* padding-bottom: 20px; */\n}\n /* #testimonial {\n    border: solid black 2px;\n}\n#hours {\n    border: solid black 2px;\n}*/\n#location {\n    text-align: center;\n} \n#navbar a {\n    font-size: large;\n}\ndt {\n    margin-top: 20px;\n}\ndd {\n    margin-top: 10px;\n}\n#contact-div p {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",d=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),d&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),d&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,d,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(d)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);d&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,d=0;d<n.length;d++)if(n[d].identifier===e){t=d;break}return t}function d(e,d){for(var o={},a=[],i=0;i<e.length;i++){var c=e[i],s=d.base?c[0]+d.base:c[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,d);d.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=d(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var i=t(o[a]);n[i].references--}for(var c=d(e,r),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var d=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var d="";t.supports&&(d+="@supports (".concat(t.supports,") {")),t.media&&(d+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(d+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),d+=t.css,r&&(d+="}"),t.media&&(d+="}"),t.supports&&(d+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(d+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(d,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(d){var r=n[d];if(void 0!==r)return r.exports;var o=n[d]={id:d,exports:{}};return e[d](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var d in n)t.o(n,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:n[d]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=()=>{document.querySelector("#home").classList.add("selected"),document.querySelector("#contact").classList.remove("selected"),document.querySelector("#menu").classList.remove("selected");const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.id="home-div";const t=document.createElement("div");t.id="testimonial";const d=document.createElement("p");d.innerHTML="Best place I've ever eaten at!<br>-John Smith",t.appendChild(d);const r=document.createElement("div");r.id="hours";const o=document.createElement("table");o.id="hours-table",o.innerHTML='<thead><tr><th colspan="2">Hours</th></tr></thead><tbody>\n    <tr><td>Sunday</td><td>12-5PM</td></tr>\n    <tr><td>Monday</td><td>8AM-8PM</td></tr>\n    <tr><td>Tuesday</td><td>8AM-8PM</td></tr>\n    <tr><td>Wednesday</td><td>8AM-8PM</td></tr>\n    <tr><td>Thursday</td><td>8AM-8PM</td></tr>\n    <tr><td>Friday</td><td>8AM-8PM</td></tr> \n    <tr><td>Saturday</td><td>12-5PM</td></tr> \n    </tbody>',r.appendChild(o);const a=document.createElement("div");a.id="location";const i=document.createElement("p");i.innerHTML="19125 First Street<br>North City, NE 27386",a.appendChild(i),n.appendChild(t),n.appendChild(r),n.appendChild(a),e.appendChild(n)};var n=t(379),d=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),p=t(589),m=t.n(p),h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),d()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,(()=>{const e=document.createElement("header");e.id="header";const n=document.createElement("nav");n.id="navbar";const t=document.createElement("ul"),d=document.createElement("li");d.id="home";const r=document.createElement("a");r.href="#",r.textContent="Home",r.id="home-link",d.appendChild(r);const o=document.createElement("li");o.id="contact";const a=document.createElement("a");a.href="#",a.textContent="Contact",a.id="contact-link",o.appendChild(a);const i=document.createElement("li");i.id="menu";const c=document.createElement("a");c.href="#",c.textContent="Menu",c.id="menu-link",i.appendChild(c),n.appendChild(t),t.appendChild(d),t.appendChild(o),t.appendChild(i),e.appendChild(n),document.body.prepend(e)})(),e(),document.querySelector("#home").addEventListener("click",(function(){e()})),document.querySelector("#contact").addEventListener("click",(function(){(()=>{document.querySelector("#home").classList.remove("selected"),document.querySelector("#contact").classList.add("selected"),document.querySelector("#menu").classList.remove("selected");const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.id="contact-div";const t=document.createElement("div"),d=document.createElement("p");d.innerHTML="Donald Westinghouse, Owner<br>Phone: 955-867-5309<br>dwestinghouse@restaurantmail.com",t.appendChild(d);const r=document.createElement("div"),o=document.createElement("p");o.innerHTML="Mary Johnson, Manager<br>Phone: 955-867-5309<br>mjohnson@restaurantmail.com",r.appendChild(o);const a=document.createElement("div"),i=document.createElement("p");i.innerHTML="John Abel, Assistant Manager<br>Phone: 955-867-5309<br>jabel@restaurantmail.com",a.appendChild(i),n.appendChild(t),n.appendChild(r),n.appendChild(a),e.appendChild(n)})()})),document.querySelector("#menu").addEventListener("click",(function(){(()=>{document.querySelector("#home").classList.remove("selected"),document.querySelector("#contact").classList.remove("selected"),document.querySelector("#menu").classList.add("selected");const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.id="menu-div",document.createElement("dl"),n.append(),n.innerHTML='\n    <div class="menu-section">\n    <p class="menu-title">BURGERS</p>\n    <dl>\n    <dt>CLASSIC / 25</dt>\n    <dd>A beef patty with caramelized onions,\n    pickles, crispy lettuce, and juicy\n    tomatoes.</dd>\n    <dt>DOUBLE / 35</dt>\n    <dd>Two quarter-pounder patties stuffed\n    between potato buns, guaranteed to\n    fill you up.</dd>\n    <dt>DAREDEVIL / 40</dt>\n    <dd>Three quarter-pounder patties stuffed\n    between potato buns. Can you handle\n    this?</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">RICE MEALS</p>\n    <dl>\n    <dt>PORK STEAK / 20</dt>\n    <dd>Pork steak served with rice and a side\n    of mashed potatoes, and a salad.</dd>\n    <dt>CORDON BLEU / 20</dt>\n    <dd>With creamy cheese, served with rice\n    and mashed potatoes.</dd>\n    <dt>STEAK / 30</dt>\n    <dd>A 20 oz. steak, medium rare, served\n    with mashed potatoes and mixed\n    vegetables.</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p  class="menu-title">SANDWICHES</p>\n    <dl>\n    <dt>VEGAN PANINI / 15</dt>\n    <dd>Roasted vegetables, in ciabatta,\n    slathered with creamy hummus.</dd>\n    <dt>ITALIAN SAUSAGE / 20<dt>\n    <dd>Grilled Italian sausage with pickles,\n    tomatoes, and mustard, with a relish.</dd>\n    <dt>3-CHEESE / 20</dt>\n    <dd>Swiss, cheddar, and mozzarella, in a\n    grilled sandwich slathered with\n    butter.</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">DRINKS</p>\n    <dl>\n    <dt>JUICE / 5 PER GLASS</dt>\n    <dd>Choice of orange, lemon, watermelon,\n    mango, grape, or strawberry.</dd>\n    <dt>ICED COFFEE / 10 PER GLASS</dt>\n    <dd>Mixed with milk, and served over ice\n    and topped with chocolate syrup.</dd>\n    <dt>SHAKE / 15</dt>\n    <dd>Watermelon, mango, strawberry-banana, mixed berries, or citrus.</dd>\n    </dl>\n    </div>',document.createElement("footer").id="footer",e.appendChild(n)})()}))})()})();