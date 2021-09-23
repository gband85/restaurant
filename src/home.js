const home = () => {
    const content = document.querySelector("#content");
    //create header
    const header = document.createElement("header");
    header.id = "header";
    //navbar
    const nav = document.createElement("nav");
    nav.id = "navbar";
    const navList = document.createElement("ul");

    const homeLink = document.createElement("li");
    const homeLink_a = document.createElement("a");
    homeLink_a.href = "#";
    homeLink_a.textContent = "Home";
    homeLink_a.classList.add("selected");
    homeLink_a.id="home";
    homeLink.appendChild(homeLink_a);

    const contactLink = document.createElement("li");
    const contactLink_a = document.createElement("a");
    contactLink_a.href = "#";
    contactLink_a.textContent = "Contact";
    contactLink_a.id="contact";
    contactLink.appendChild(contactLink_a);

    const menuLink = document.createElement("li");
    const menuLink_a = document.createElement("a");
    menuLink_a.href = "#";
    menuLink_a.textContent = "Menu";
    menuLink_a.id="menu";
    menuLink.appendChild(menuLink_a);

    nav.appendChild(navList);
    navList.appendChild(homeLink);
    navList.appendChild(contactLink);
    navList.appendChild(menuLink);
    header.appendChild(nav);
    //main section
    const main = document.createElement("main");
    main.id = "main";
    //footer
    const footer = document.createElement("footer");
    footer.id = "footer";
    //add to content div
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

}

export default home