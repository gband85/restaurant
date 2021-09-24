const homeTab = () => {
    const content = document.querySelector("#content");
    content.innerHTML="";
    const homeDiv = document.createElement("div");
    homeDiv.id="home-div";
    
    //main section
    const main = document.createElement("main");
    main.id = "main";
    main.append(document.createElement("h1").textContent="Home")
    //footer
    const footer = document.createElement("footer");
    footer.id = "footer";
    //add to content div
    //homeDiv.appendChild(header);
    homeDiv.appendChild(main);
    homeDiv.appendChild(footer);
content.appendChild(homeDiv);
}

export { homeTab }