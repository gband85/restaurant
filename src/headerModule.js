import { contactTab } from "./contactTab";

const headerModule = () => {
    //create header
    const header = document.createElement("header");
    header.id = "header";
    //navbar
    const mobileNav = document.createElement("div");
    mobileNav.className="mobile-nav";
    const logo=document.createElement("h1");
    logo.className="logo";
    logo.textContent="RSR";
    mobileNav.appendChild(logo);
        const hamburger=document.createElement("i");
        hamburger.id="hamburger";
    hamburger.classList.add("fa","fa-bars");
    mobileNav.appendChild(hamburger);

    const navbar = document.createElement("nav");
    navbar.id = "navbar";
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
    
    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(contact);
    navbar.appendChild(navList);
    header.appendChild(mobileNav);
    header.appendChild(navbar);
    content.appendChild(header);
}

export { headerModule }