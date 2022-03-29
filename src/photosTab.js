const photosTab = () => {
    // main.innerHTML = "";
    if (document.querySelector('.hero')!=null) {
        content.removeChild(document.querySelector('.hero'));
        }
        content.removeChild(document.querySelector('.container'));
    const title=document.createElement("div");
    title.className="title";
    const titleText=document.createElement("h1");
    titleText.textContent="Photos"
    title.appendChild(titleText);
    
    const photosSection=document.createElement("div");
    photosSection.className="photos";
    photosSection.innerHTML=`
    <img src="../src/pexels-andrea-piacquadio-821054.jpg" alt="" class="photo">
    <img src="../src/pexels-edward-eyer-687824.jpg" alt="" class="photo">
    <img src="../src/pexels-helena-lopes-696218.jpg" alt="" class="photo">
    <img src="../src/pexels-live-on-shot-2788792.jpg" alt="" class="photo">
    <img src="../src/pexels-mali-maeder-64208.jpg" alt="" class="photo">
    <img src="../src/pexels-picjumbocom-225228.jpg" alt="" class="photo">
    <img src="../src/pexels-helena-lopes-1015568.jpg" alt="" class="photo">
    <img src="../src/pexels-pixabay-262978.jpg" alt="" class="photo">
    <img src="../src/pexels-helena-lopes-693269.jpg" alt="" class="photo">
    <img src="../src/pexels-terje-sollie-299347.jpg" alt="" class="photo">
    <img src="../src/pexels-valeria-boltneva-1484516.jpg" alt="" class="photo">
    <img src="../src/pexels-lisa-fotios-1126728.jpg" alt="" class="photo">
    `
    const container = document.createElement("div");
    container.className="container";
    container.appendChild(title);
    container.appendChild(photosSection);
        content.appendChild(container);
}

export { photosTab }