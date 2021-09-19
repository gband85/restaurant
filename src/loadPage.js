const loadPage = () => {
     const content = document.querySelector("#content");
    const header=document.createElement("header");
    header.id="header";
    const nav=document.createElement("nav");
    nav.id="navbar";
    header.appendChild(nav);    
    //h1.textContent="Test"
const main = document.createElement("main");
main.id="main";
const footer = document.createElement("footer");
footer.id="footer";
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);
    //return header;
    //document.getElementById("content").append(main);
    //console.log("Hello!");
}

export default loadPage