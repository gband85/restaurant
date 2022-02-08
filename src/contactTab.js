const contactTab = () => {
    document.querySelector("#home").classList.remove("selected");
    document.querySelector("#contact").classList.add("selected");
    document.querySelector("#menu").classList.remove("selected");
   main.innerHTML="";
    const contactDiv = document.createElement("div");
    contactDiv.id="contact-div";    
    
    const title=document.createElement("div");
    title.className="title"
    const titleText=document.createElement("h1");
    titleText.textContent="Contact";
    title.appendChild(titleText);

    const contact1=document.createElement("div");
    contact1.className="contact";
    const contact1Text = document.createElement("p");
    contact1Text.innerHTML="Donald Westinghouse, Owner<br>Phone: 955-867-5309<br>dwestinghouse@restaurantmail.com"
    contact1.appendChild(contact1Text);   
    
    const contact2=document.createElement("div");
    contact2.className="contact";
     const contact2Text = document.createElement("p");
    contact2Text.innerHTML="Mary Johnson, Manager<br>Phone: 955-867-5309<br>mjohnson@restaurantmail.com"
    contact2.appendChild(contact2Text);

    const contact3=document.createElement("div");
    contact3.className="contact";
const contact3Text = document.createElement("p");
    contact3Text.innerHTML="John Abel, Assistant Manager<br>Phone: 955-867-5309<br>jabel@restaurantmail.com"
    contact3.appendChild(contact3Text);

    //add to content div
    contactDiv.appendChild(title);
    contactDiv.appendChild(contact1);
    contactDiv.appendChild(contact2);
    contactDiv.appendChild(contact3);
    main.appendChild(contactDiv);
    content.appendChild(main);
}

export { contactTab }