const contactTab = () => {
  // if (document.querySelector(".hero") != null) {
  //   content.removeChild(document.querySelector(".hero"));
  // }
  // content.removeChild(document.querySelector(".container"));
  const container = document.createElement("div");
  container.className = "container";
   container.innerHTML=`<div class="title">
   <h1>Contact</h1>
</div>
<div class="contact">
   <p>Donald Westinghouse, Owner<br>Phone: 955-867-5309<br>dwestinghouse@restaurantmail.com</p>
</div>
<div class="contact">
   <p>Mary Johnson, Manager<br>Phone: 955-867-5309<br>mjohnson@restaurantmail.com</p>
</div>
<div class="contact">
   <p>John Abel, Assistant Manager<br>Phone: 955-867-5309<br>jabel@restaurantmail.com</p>
</div>`

  return container;
};

export { contactTab };
