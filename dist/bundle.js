(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),d=n.n(r),o=n(645),a=n.n(o),i=n(667),c=n.n(i),s=new URL(n(118),n.b),l=a()(d()),u=c()(s);l.push([e.id,"@font-face {\n    font-family: 'Merriweather';\n    src: url("+u+") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;    \n}\nbody, html {\n    background-color: lightslategrey;\n    font-family: 'Merriweather', serif;\n}\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#navbar ul li {\n    display: inline-block;\n    padding: 10px 30px;\n    border-top: 3px solid white;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    margin: 0 10px;\n    cursor: pointer;\n}\n#hours-table {\n    border-spacing: 60px 10px;\n}\n#hours-table td {\n    width: 100px;\n    text-align: center;\n}\n#navbar ul li a {\n    text-decoration: none;\n}\n#navbar ul li a:visited {\ncolor: white;\n}\n#header {\n    background-color: black;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    height: 60px;\n    margin-bottom: 30px;\n    color: white;\n}\n#navbar ul {\n    list-style: none;\n}\n.selected {\n    background-color: blue;\n}\n#home-div, #contact-div, #menu-div {\n    flex-direction: column;\n    align-items: center;\n    padding: 5px;\n    justify-content: space-evenly;\n}\n #contact-div > div {\nborder: solid lightgrey 1px;\npadding: 20px;\nbackground-color: white;\n} \n#home-div  div {\n    border: solid lightgray 1px;\n    background-color: white;\n    padding: 20px;\n}\n#menu-div > div {\n    border: solid lightgrey 1px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: white;\n}\n\n.menu-title {\n    text-align: center;\n}\n\n#testimonial {\n    margin-bottom: 20px;\n}\n#hours {\n    margin-bottom: 20px;\n}\n#location {\n    text-align: center;\n} \n#navbar a {\n    font-size: large;\n}\ndt {\n    margin-top: 20px;\n}\ndd {\n    margin-top: 10px;\n}\n#contact-div p {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.title {\n    text-align: center;\n    background-color: white;\n    margin-bottom: 30px;\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,d,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),d&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=d):l[4]="".concat(d)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=d(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var o=r(e=e||[],d=d||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var i=n(o[a]);t[i].references--}for(var c=r(e,d),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,d&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},118:(e,t,n)=>{e.exports=n.p+"55c73e48e04ec926ebfe.ttf"}},t={};function n(r){var d=t[r];if(void 0!==d)return d.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{const e=()=>{document.querySelector("#home").classList.add("selected"),document.querySelector("#contact").classList.remove("selected"),document.querySelector("#menu").classList.remove("selected");const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.id="home-div";const n=document.createElement("div");n.className="title";const r=document.createElement("h1");r.textContent="Riverside Restaurant",n.appendChild(r);const d=document.createElement("div");d.id="testimonial";const o=document.createElement("p");o.innerHTML="Best place I've ever eaten at!<br>-John Smith",d.appendChild(o);const a=document.createElement("div");a.id="hours";const i=document.createElement("table");i.id="hours-table",i.innerHTML='<thead><tr><th colspan="2">Hours</th></tr></thead><tbody>\n    <tr><td>Sunday</td><td>12-5PM</td></tr>\n    <tr><td>Monday</td><td>8AM-8PM</td></tr>\n    <tr><td>Tuesday</td><td>8AM-8PM</td></tr>\n    <tr><td>Wednesday</td><td>8AM-8PM</td></tr>\n    <tr><td>Thursday</td><td>8AM-8PM</td></tr>\n    <tr><td>Friday</td><td>8AM-8PM</td></tr> \n    <tr><td>Saturday</td><td>12-5PM</td></tr> \n    </tbody>',a.appendChild(i);const c=document.createElement("div");c.id="location";const s=document.createElement("p");s.innerHTML="19125 First Street<br>North City, NE 27386",c.appendChild(s),t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(c),e.appendChild(t)};var t=n(379),r=n.n(t),d=n(795),o=n.n(d),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),u=n.n(l),p=n(589),m=n.n(p),h=n(426),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,(()=>{const e=document.createElement("header");e.id="header";const t=document.createElement("nav");t.id="navbar";const n=document.createElement("ul"),r=document.createElement("li");r.id="home";const d=document.createElement("a");d.href="#",d.textContent="Home",d.id="home-link",r.appendChild(d);const o=document.createElement("li");o.id="contact";const a=document.createElement("a");a.href="#",a.textContent="Contact",a.id="contact-link",o.appendChild(a);const i=document.createElement("li");i.id="menu";const c=document.createElement("a");c.href="#",c.textContent="Menu",c.id="menu-link",i.appendChild(c),t.appendChild(n),n.appendChild(r),n.appendChild(o),n.appendChild(i),e.appendChild(t),document.body.prepend(e)})(),e(),document.querySelector("#home").addEventListener("click",(function(){e()})),document.querySelector("#contact").addEventListener("click",(function(){(()=>{document.querySelector("#home").classList.remove("selected"),document.querySelector("#contact").classList.add("selected"),document.querySelector("#menu").classList.remove("selected");const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.id="contact-div";const n=document.createElement("div");n.className="title";const r=document.createElement("h1");r.textContent="Contact",n.appendChild(r);const d=document.createElement("div"),o=document.createElement("p");o.innerHTML="Donald Westinghouse, Owner<br>Phone: 955-867-5309<br>dwestinghouse@restaurantmail.com",d.appendChild(o);const a=document.createElement("div"),i=document.createElement("p");i.innerHTML="Mary Johnson, Manager<br>Phone: 955-867-5309<br>mjohnson@restaurantmail.com",a.appendChild(i);const c=document.createElement("div"),s=document.createElement("p");s.innerHTML="John Abel, Assistant Manager<br>Phone: 955-867-5309<br>jabel@restaurantmail.com",c.appendChild(s),t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(c),e.appendChild(t)})()})),document.querySelector("#menu").addEventListener("click",(function(){(()=>{document.querySelector("#home").classList.remove("selected"),document.querySelector("#contact").classList.remove("selected"),document.querySelector("#menu").classList.add("selected");const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.id="menu-div",t.innerHTML='\n    <div class="title">\n    <h1>Menu</h1>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">BURGERS</p>\n    <dl>\n    <dt>CLASSIC / 25</dt>\n    <dd>A beef patty with caramelized onions,\n    pickles, crispy lettuce, and juicy\n    tomatoes.</dd>\n    <dt>DOUBLE / 35</dt>\n    <dd>Two quarter-pounder patties stuffed\n    between potato buns, guaranteed to\n    fill you up.</dd>\n    <dt>DAREDEVIL / 40</dt>\n    <dd>Three quarter-pounder patties stuffed\n    between potato buns. Can you handle\n    this?</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">RICE MEALS</p>\n    <dl>\n    <dt>PORK STEAK / 20</dt>\n    <dd>Pork steak served with rice and a side\n    of mashed potatoes, and a salad.</dd>\n    <dt>CORDON BLEU / 20</dt>\n    <dd>With creamy cheese, served with rice\n    and mashed potatoes.</dd>\n    <dt>STEAK / 30</dt>\n    <dd>A 20 oz. steak, medium rare, served\n    with mashed potatoes and mixed\n    vegetables.</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p  class="menu-title">SANDWICHES</p>\n    <dl>\n    <dt>VEGAN PANINI / 15</dt>\n    <dd>Roasted vegetables, in ciabatta,\n    slathered with creamy hummus.</dd>\n    <dt>ITALIAN SAUSAGE / 20<dt>\n    <dd>Grilled Italian sausage with pickles,\n    tomatoes, and mustard, with a relish.</dd>\n    <dt>3-CHEESE / 20</dt>\n    <dd>Swiss, cheddar, and mozzarella, in a\n    grilled sandwich slathered with\n    butter.</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">DRINKS</p>\n    <dl>\n    <dt>JUICE / 5 PER GLASS</dt>\n    <dd>Choice of orange, lemon, watermelon,\n    mango, grape, or strawberry.</dd>\n    <dt>ICED COFFEE / 10 PER GLASS</dt>\n    <dd>Mixed with milk, and served over ice\n    and topped with chocolate syrup.</dd>\n    <dt>SHAKE / 15</dt>\n    <dd>Watermelon, mango, strawberry-banana, mixed berries, or citrus.</dd>\n    </dl>\n    </div>',e.appendChild(t)})()}))})()})();