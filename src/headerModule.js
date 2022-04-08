const headerModule = () => {
  //create header
  const header = document.createElement("header");
  header.id = "header";
  header.innerHTML=`<nav class="navbar">
  <a href="index.html" class="logo">RSR</a>
  <ul>
      <li id="home"><button class="link">Home</button></li>
      <li id="menu"><button class="link">Menu</button></li>
      <li id="reviews"><button class="link">Reviews</button></li>
      <li id="photos"><button class="link">Photos</button></li>
      <li id="contact"><button class="link">Contact</button></li>
  </ul>
  <i id="hamburger" class="fa-solid fa-bars"></i>
</nav>`
  
  return header;
};

export { headerModule };
