import { contactTab } from "./contactTab";

const headerModule = () => {
    //create header
    const header = document.createElement("header");
   // header.id = "header";
    //navbar
     const navbar = document.createElement("nav");
    navbar.className = "navbar";

    const logo=document.createElement("a");
    logo.className="logo";
    // logo.textContent="RSR";
    logo.href="#"
    const image=document.createElement("img");
    image.src="../src/riverside.jpg";
    image.style.width="110px";
    logo.appendChild(image)

    const navList = document.createElement("ul");
navList.className="nav-list"
    
const home = document.createElement("li");
    home.id="home";
    
    const homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.textContent = "Home";    
    homeLink.className="link";
    home.appendChild(homeLink);

    const menu = document.createElement("li");
    menu.id="menu";
    
    const menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.className="link";
    menu.appendChild(menuLink);



    const reviews = document.createElement("li");
    reviews.id="reviews";
    
    const reviewsLink = document.createElement("a");
    reviewsLink.href = "#";
    reviewsLink.textContent = "Reviews";
    reviewsLink.className="link";
    reviews.appendChild(reviewsLink);

    const photos = document.createElement("li");
    photos.id="photos";
    
    const photosLink = document.createElement("a");
    photosLink.href = "#";
    photosLink.textContent = "Photos";
    photosLink.className="link";
    photos.appendChild(photosLink);


    const contact = document.createElement("li");
    contact.id="contact";
    
    const contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.className="link";
    contact.appendChild(contactLink);

    
    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(reviews)
    navList.appendChild(photos)
    navList.appendChild(contact);
     const hamburger=document.createElement("i");
    hamburger.id="hamburger";
hamburger.classList.add("fa","fa-bars");   
 navbar.appendChild(logo);
// navbar.appendChild(hamburger);
     navbar.appendChild(navList);
    header.appendChild(navbar);
    content.appendChild(header);
}

export { headerModule }