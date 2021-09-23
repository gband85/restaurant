const menuTab = () => {
    const content= document.querySelector("#content");
    const menuDiv = document.createElement("div");
    menuDiv.id="menu-div";
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
    homeLink.id="home-link";
    home.appendChild(homeLink);

    const contact = document.createElement("li");
    contact.classList.remove("selected");
    const contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
   contactLink.id="contact-link";
    contact.appendChild(contactLink);

    const menu = document.createElement("li");
    menu.classList.add("selected");
    const menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.id="menu-link";
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
    menuDiv.appendChild(header);
    menuDiv.appendChild(main);
    menuDiv.appendChild(footer);
    content.appendChild(menuDiv);
}

export default menuTab