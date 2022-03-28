const photosTab = () => {
    main.innerHTML = "";
    const title=document.createElement("section");
    title.className="title";
    const titleText=document.createElement("h1");
    titleText.textContent="Photos"
    title.appendChild(titleText);
    
    const photos=document.createElement("section");
    photos.className="photos";
    photos.innerHTML=`<img src="./pexels-andrea-piacquadio-821054.jpg" alt="" className="photo">
    <img src="./pexels-edward-eyer-687824.jpg" alt="" className="photo">
    <img src="./pexels-helena-lopes-696218.jpg" alt="" className="photo">
    <img src="./pexels-live-on-shot-2788792.jpg" alt="" className="photo">
    <img src="./pexels-mali-maeder-64208.jpg" alt="" className="photo">
    <img src="./pexels-picjumbocom-225228.jpg" alt="" className="photo">
    <img src="./pexels-pixabay-262918.jpg" alt="" className="photo">
    <img src="./pexels-pixabay-262978.jpg" alt="" className="photo">
    <img src="./pexels-roman-odintsov-4552128.jpg" alt="" className="photo">
    <img src="./pexels-terje-sollie-299347.jpg" alt="" className="photo">
    <img src="./pexels-valeria-boltneva-1484516.jpg" alt="" className="photo">
    <img src="./pexels-pixabay-460537.jpg" alt="" className="photo">`
}