const contactTab = () => {
    const content = document.querySelector("#content");
    const contactDiv = document.createElement("div");
    contactDiv.id="contact-div";
    
    //main section
    const main = document.createElement("main");
    main.id = "main";
    //footer
    const footer = document.createElement("footer");
    footer.id = "footer";
    //add to content div
    contactDiv.appendChild(header);
    contactDiv.appendChild(main);
    contactDiv.appendChild(footer);
    content.appendChild(contactDiv);
}

export default contactTab