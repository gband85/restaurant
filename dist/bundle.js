(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),d=t(645),a=t.n(d),i=t(667),c=t.n(i),s=new URL(t(118),t.b),l=a()(o()),u=c()(s);l.push([e.id,"\n@font-face {\n    font-family: 'Merriweather';\n    src: url("+u+") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\nbody, html {\n    background-color: lightslategrey;\n    font-family: 'Merriweather', serif;\n}\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#navbar ul li {\n    display: inline-block;\n    padding: 10px 30px;\n    border-top: 3px solid white;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    margin: 0 10px;\n    cursor: pointer;\n}\n/* #hours {\n\n    padding: 30px;\n} */\n#hours-table {\n    /* border: 2px solid black; */\n    /* border-collapse: collapse; */\n    border-spacing: 60px 10px;\n    /* margin: 0 auto; */\n}\n#hours-table td {\n    /* border: 2px solid black; */\n    /* margin-right: 30px; */\n    width: 100px;\n    text-align: center;\n}\n#navbar ul li a {\n    text-decoration: none;\n}\n#navbar ul li a:visited {\ncolor: white;\n}\n#header {\n    background-color: black;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    height: 60px;\n    margin-bottom: 30px;\n    color: white;\n}\n#navbar ul {\n    list-style: none;\n}\n.selected {\n    background-color: blue;\n}\n#home-div, #contact-div, #menu-div {\n    /* display: flex; */\n    flex-direction: column;\n    align-items: center;\n    padding: 5px;\n    /* border: solid black 2px; */\n    justify-content: space-evenly;\n}\n #contact-div > div {\nborder: solid lightgrey 1px;\n/* margin: 20px;  */\npadding: 20px;\nbackground-color: white;\n} \n#home-div  div {\n    border: solid lightgray 1px;\n    /* margin-top: 20px;\n    margin-bottom: 20px; */\n    background-color: white;\n    padding: 20px;\n}\n#menu-div > div {\n    border: solid lightgrey 1px;\n    margin: 20px;\n    padding: 30px;\n    background-color: white;\n}\n.menu-section p {\n/* margin-top: 30px; */\n}\n.menu-title {\n    text-align: center;\n}\n.menu-section {\n    /* padding-bottom: 20px; */\n}\n#testimonial {\n    margin-bottom: 20px;\n}\n#hours {\n    margin-bottom: 20px;\n}\n#location {\n    text-align: center;\n} \n#navbar a {\n    font-size: large;\n}\ndt {\n    margin-top: 20px;\n}\ndd {\n    margin-top: 10px;\n}\n#contact-div p {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.title {\n    text-align: center;\n    background-color: white;\n    margin-bottom: 30px;\n}",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,d){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var d={},a=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],l=d[s]||0,u="".concat(s," ").concat(l);d[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var d=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<d.length;a++){var i=t(d[a]);n[i].references--}for(var c=r(e,o),s=0;s<d.length;s++){var l=t(d[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}d=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},118:(e,n,t)=>{e.exports=t.p+"55c73e48e04ec926ebfe.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var d=n[r]={id:r,exports:{}};return e[r](d,d.exports,t),d.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{const e=()=>{document.querySelector("#home").classList.add("selected"),document.querySelector("#contact").classList.remove("selected"),document.querySelector("#menu").classList.remove("selected");const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.id="home-div";const t=document.createElement("div");t.className="title";const r=document.createElement("h1");r.textContent="Riverside Restaurant",t.appendChild(r);const o=document.createElement("div");o.id="testimonial";const d=document.createElement("p");d.innerHTML="Best place I've ever eaten at!<br>-John Smith",o.appendChild(d);const a=document.createElement("div");a.id="hours";const i=document.createElement("table");i.id="hours-table",i.innerHTML='<thead><tr><th colspan="2">Hours</th></tr></thead><tbody>\n    <tr><td>Sunday</td><td>12-5PM</td></tr>\n    <tr><td>Monday</td><td>8AM-8PM</td></tr>\n    <tr><td>Tuesday</td><td>8AM-8PM</td></tr>\n    <tr><td>Wednesday</td><td>8AM-8PM</td></tr>\n    <tr><td>Thursday</td><td>8AM-8PM</td></tr>\n    <tr><td>Friday</td><td>8AM-8PM</td></tr> \n    <tr><td>Saturday</td><td>12-5PM</td></tr> \n    </tbody>',a.appendChild(i);const c=document.createElement("div");c.id="location";const s=document.createElement("p");s.innerHTML="19125 First Street<br>North City, NE 27386",c.appendChild(s),n.appendChild(t),n.appendChild(o),n.appendChild(a),n.appendChild(c),e.appendChild(n)};var n=t(379),r=t.n(n),o=t(795),d=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),p=t(589),m=t.n(p),h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=u(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,(()=>{const e=document.createElement("header");e.id="header";const n=document.createElement("nav");n.id="navbar";const t=document.createElement("ul"),r=document.createElement("li");r.id="home";const o=document.createElement("a");o.href="#",o.textContent="Home",o.id="home-link",r.appendChild(o);const d=document.createElement("li");d.id="contact";const a=document.createElement("a");a.href="#",a.textContent="Contact",a.id="contact-link",d.appendChild(a);const i=document.createElement("li");i.id="menu";const c=document.createElement("a");c.href="#",c.textContent="Menu",c.id="menu-link",i.appendChild(c),n.appendChild(t),t.appendChild(r),t.appendChild(d),t.appendChild(i),e.appendChild(n),document.body.prepend(e)})(),e(),document.querySelector("#home").addEventListener("click",(function(){e()})),document.querySelector("#contact").addEventListener("click",(function(){(()=>{document.querySelector("#home").classList.remove("selected"),document.querySelector("#contact").classList.add("selected"),document.querySelector("#menu").classList.remove("selected");const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.id="contact-div";const t=document.createElement("div");t.className="title";const r=document.createElement("h1");r.textContent="Contact",t.appendChild(r);const o=document.createElement("div"),d=document.createElement("p");d.innerHTML="Donald Westinghouse, Owner<br>Phone: 955-867-5309<br>dwestinghouse@restaurantmail.com",o.appendChild(d);const a=document.createElement("div"),i=document.createElement("p");i.innerHTML="Mary Johnson, Manager<br>Phone: 955-867-5309<br>mjohnson@restaurantmail.com",a.appendChild(i);const c=document.createElement("div"),s=document.createElement("p");s.innerHTML="John Abel, Assistant Manager<br>Phone: 955-867-5309<br>jabel@restaurantmail.com",c.appendChild(s),n.appendChild(t),n.appendChild(o),n.appendChild(a),n.appendChild(c),e.appendChild(n)})()})),document.querySelector("#menu").addEventListener("click",(function(){(()=>{document.querySelector("#home").classList.remove("selected"),document.querySelector("#contact").classList.remove("selected"),document.querySelector("#menu").classList.add("selected");const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.id="menu-div",n.innerHTML='\n    <div class="title">\n    <h1>Menu</h1>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">BURGERS</p>\n    <dl>\n    <dt>CLASSIC / 25</dt>\n    <dd>A beef patty with caramelized onions,\n    pickles, crispy lettuce, and juicy\n    tomatoes.</dd>\n    <dt>DOUBLE / 35</dt>\n    <dd>Two quarter-pounder patties stuffed\n    between potato buns, guaranteed to\n    fill you up.</dd>\n    <dt>DAREDEVIL / 40</dt>\n    <dd>Three quarter-pounder patties stuffed\n    between potato buns. Can you handle\n    this?</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">RICE MEALS</p>\n    <dl>\n    <dt>PORK STEAK / 20</dt>\n    <dd>Pork steak served with rice and a side\n    of mashed potatoes, and a salad.</dd>\n    <dt>CORDON BLEU / 20</dt>\n    <dd>With creamy cheese, served with rice\n    and mashed potatoes.</dd>\n    <dt>STEAK / 30</dt>\n    <dd>A 20 oz. steak, medium rare, served\n    with mashed potatoes and mixed\n    vegetables.</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p  class="menu-title">SANDWICHES</p>\n    <dl>\n    <dt>VEGAN PANINI / 15</dt>\n    <dd>Roasted vegetables, in ciabatta,\n    slathered with creamy hummus.</dd>\n    <dt>ITALIAN SAUSAGE / 20<dt>\n    <dd>Grilled Italian sausage with pickles,\n    tomatoes, and mustard, with a relish.</dd>\n    <dt>3-CHEESE / 20</dt>\n    <dd>Swiss, cheddar, and mozzarella, in a\n    grilled sandwich slathered with\n    butter.</dd>\n    </dl>\n    </div>\n    <div class="menu-section">\n    <p class="menu-title">DRINKS</p>\n    <dl>\n    <dt>JUICE / 5 PER GLASS</dt>\n    <dd>Choice of orange, lemon, watermelon,\n    mango, grape, or strawberry.</dd>\n    <dt>ICED COFFEE / 10 PER GLASS</dt>\n    <dd>Mixed with milk, and served over ice\n    and topped with chocolate syrup.</dd>\n    <dt>SHAKE / 15</dt>\n    <dd>Watermelon, mango, strawberry-banana, mixed berries, or citrus.</dd>\n    </dl>\n    </div>',e.appendChild(n)})()}))})()})();