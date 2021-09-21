const home = () => {
     const content = document.querySelector("#content");
     //create header
    const header=document.createElement("header");
    header.id="header";
    //navbar
    const nav=document.createElement("nav");
    nav.id="navbar";
    header.appendChild(nav);    
//main section
const main = document.createElement("main");
main.id="main";
//footer
const footer = document.createElement("footer");
footer.id="footer";
//add to content div
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

}

export default home