const headerModule = () => {
  //create header
  const header = document.createElement("header");
  header.id = "header";
  //navbar
  const navbar = document.createElement("nav");
  navbar.className = "navbar";

  const logo = document.createElement("a");
  logo.className = "logo";
  logo.textContent = "RSR";
  logo.href = "#";

  global.navList = document.createElement("ul");
  // navList=global.navList;
  navList.className = "nav-list";

  const home = document.createElement("li");
  home.id = "home";

  const homeLink = document.createElement("a");
  homeLink.href = "#";
  homeLink.textContent = "Home";
  homeLink.className = "link";
  home.appendChild(homeLink);

  const menu = document.createElement("li");
  menu.id = "menu";

  const menuLink = document.createElement("a");
  menuLink.href = "#";
  menuLink.textContent = "Menu";
  menuLink.className = "link";
  menu.appendChild(menuLink);

  const reviews = document.createElement("li");
  reviews.id = "reviews";

  const reviewsLink = document.createElement("a");
  reviewsLink.href = "#";
  reviewsLink.textContent = "Reviews";
  reviewsLink.className = "link";
  reviews.appendChild(reviewsLink);

  const photos = document.createElement("li");
  photos.id = "photos";

  const photosLink = document.createElement("a");
  photosLink.href = "#";
  photosLink.textContent = "Photos";
  photosLink.className = "link";
  photos.appendChild(photosLink);

  const contact = document.createElement("li");
  contact.id = "contact";

  const contactLink = document.createElement("a");
  contactLink.href = "#";
  contactLink.textContent = "Contact";
  contactLink.className = "link";
  contact.appendChild(contactLink);

  global.hamburger = document.createElement("i");
hamburger.id = "hamburger";
hamburger.classList.add("fa-solid", "fa-bars");

  // navList.appendChild(hamburger)
  navList.appendChild(home);
  navList.appendChild(menu);
  navList.appendChild(reviews);
  navList.appendChild(photos);
  navList.appendChild(contact);

  const nav = document.createElement("div");
  nav.className = "nav";

  //  navbar.appendChild(logo);
  navbar.appendChild(logo);
  navbar.appendChild(navList);
  navbar.appendChild(hamburger);
  header.appendChild(navbar);
  return header;
};

export { headerModule };
