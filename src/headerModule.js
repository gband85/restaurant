const headerModule = () => {
  //create header
  const header = document.createElement("header");
  header.id = "header";
  header.innerHTML=`<nav class="navbar">
  <a href="index.html" class="logo">RSR</a>
     <ul class="nav-list" id="nav-list">
      <li id="home"><button class="btn">Home</button></li>
      <li id="menu"><button class="btn">Menu</button></li>
      <li id="reviews"><button class="btn">Reviews</button></li>
      <li id="photos"><button class="btn">Photos</button></li>
      <li id="contact"><button class="btn">Contact</button></li>
  </ul>
 <i id="hamburger" class="fa-solid fa-bars"></i>
</nav>`
  
  return header;
};

export { headerModule };
