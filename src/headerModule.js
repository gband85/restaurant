const headerModule = () => {
    //create header
    const header = document.createElement("header");
    header.id = "header";
    //navbar
    const nav = document.createElement("nav");
    nav.id = "navbar";
    const navList = document.createElement("ul");

    const home = document.createElement("li");
    home.id="home";
    const homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Home";    
    homeLink.id="home-link";
    home.appendChild(homeLink);

    const contact = document.createElement("li");
    contact.id="contact";
    const contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.id="contact-link";
    contact.appendChild(contactLink);

    const menu = document.createElement("li");
    menu.id="menu";
    const menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.id="menu-link";
    menu.appendChild(menuLink);

    nav.appendChild(navList);
    navList.appendChild(home);
    navList.appendChild(contact);
    navList.appendChild(menu);
    header.appendChild(nav);
    document.body.prepend(header);
}

export { headerModule }