(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("header");t.id="header";const n=document.createElement("nav");n.id="navbar";const c=document.createElement("ul"),d=document.createElement("li");d.classList.add("selected");const o=document.createElement("a");o.href="#",o.textContent="Home",o.id="home-link",d.appendChild(o),document.createElement("li").classList.remove("selected");const a=document.createElement("a");a.href="#",a.textContent="Contact",a.id="contact-link",a.appendChild(a);const l=document.createElement("li");l.classList.remove("selected");const i=document.createElement("a");i.href="#",i.textContent="Menu",i.id="menu-link",l.appendChild(i),n.appendChild(c),c.appendChild(o),c.appendChild(a),c.appendChild(i),t.appendChild(n);const m=document.createElement("main");m.id="main";const r=document.createElement("footer");r.id="footer",e.appendChild(t),e.appendChild(m),e.appendChild(r)};window.onload=function(){e()},document.querySelector("#home").addEventListener("click",(function(){e()})),document.querySelector("#contact").addEventListener("click",(function(){e()})),document.querySelector("#menu").addEventListener("click",(function(){e()}))})();