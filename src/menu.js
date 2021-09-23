const menu = () => {
    const content = document.querySelector("#content");
    //create header
    const header = document.createElement("header");
    header.id = "header";
    //navbar
    const nav = document.createElement("nav");
    nav.id = "navbar";
    const navList = document.createElement("ul");

    const home = document.createElement("li");
    home.classList.remove("selected");
    const homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Home";
    homeLink.classList.add("selected");
    homeLink.id="home";
    home.appendChild(homeLink);

    const contact = document.createElement("li");
    contact.classList.remove("selected");
    const contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.id="contact";
    contact.appendChild(contactLink);

    const menu = document.createElement("li");
    menu.classList.add("selected");
    const menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.id="menu";
    menu.appendChild(menuLink);

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

export default menu