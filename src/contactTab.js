const contactTab = () => {
    document.querySelector(".nav-list li").classList.remove("selected");
   // document.querySelector("#menu").classList.remove("selected");
    document.querySelector("#contact").classList.add("selected");
    
   main.innerHTML="";
    const title=document.createElement("section");
    title.className="title"
    const titleText=document.createElement("h1");
    titleText.textContent="Contact";
    title.appendChild(titleText);

    const contact1=document.createElement("section");
    contact1.className="contact";
    const contact1Text = document.createElement("p");
    contact1Text.innerHTML="Donald Westinghouse, Owner<br>Phone: 955-867-5309<br>dwestinghouse@restaurantmail.com"
    contact1.appendChild(contact1Text);   
    
    const contact2=document.createElement("section");
    contact2.className="contact";
     const contact2Text = document.createElement("p");
    contact2Text.innerHTML="Mary Johnson, Manager<br>Phone: 955-867-5309<br>mjohnson@restaurantmail.com"
    contact2.appendChild(contact2Text);

    const contact3=document.createElement("section");
    contact3.className="contact";
const contact3Text = document.createElement("p");
    contact3Text.innerHTML="John Abel, Assistant Manager<br>Phone: 955-867-5309<br>jabel@restaurantmail.com"
    contact3.appendChild(contact3Text);
    const container = document.createElement("div");
container.className="container";
    //add to content div
    container.appendChild(title);
    container.appendChild(contact1);
    container.appendChild(contact2);
    container.appendChild(contact3);
    main.appendChild(container);
    content.appendChild(main);
}

export { contactTab }