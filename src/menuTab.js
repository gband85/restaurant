const menuTab = () => {
    const content= document.querySelector("#content");
    const menuDiv = document.createElement("div");
    menuDiv.id="menu-div";
    
    //main section
    const main = document.createElement("main");
    main.id = "main";
    //footer
    const footer = document.createElement("footer");
    footer.id = "footer";
    //add to content div
    menuDiv.appendChild(header);
    menuDiv.appendChild(main);
    menuDiv.appendChild(footer);
    content.appendChild(menuDiv);
}

export default menuTab