const photosTab = () => {
    main.innerHTML = "";
    const title=document.createElement("section");
    title.className="title";
    const titleText=document.createElement("h1");
    titleText.textContent="Photos"
    title.appendChild(titleText);
}