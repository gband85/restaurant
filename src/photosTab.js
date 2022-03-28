const photosTab = () => {
    // main.innerHTML = "";
    const title=document.createElement("section");
    title.className="title";
    const titleText=document.createElement("h1");
    titleText.textContent="Photos"
    title.appendChild(titleText);
    
    const photosSection=document.createElement("section");
    photosSection.className="photos";
    photosSection.innerHTML=`
    <img src="../src/pexels-andrea-piacquadio-821054.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-edward-eyer-687824.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-helena-lopes-696218.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-live-on-shot-2788792.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-mali-maeder-64208.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-picjumbocom-225228.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-helena-lopes-1015568.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-pixabay-262978.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-helena-lopes-693269.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-terje-sollie-299347.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-valeria-boltneva-1484516.jpg" alt="" className="photo" width="400" height="270">
    <img src="../src/pexels-lisa-fotios-1126728.jpg" alt="" className="photo" width="400" height="270">
    `
    const container = document.createElement("div");
    container.className="container";
    container.appendChild(title);
    container.appendChild(photosSection);
        content.appendChild(container);
}

export { photosTab }