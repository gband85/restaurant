function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const photosTab = () => {
  // main.innerHTML = "";
  // if (document.querySelector(".hero") != null) {
  //   content.removeChild(document.querySelector(".hero"));
  // }
  // content.removeChild(document.querySelector(".container"));
  const container = document.createElement("div");
  container.className = "container";
container.innerHTML=`
  <div class="title">
    <h1>Photos</h1>
</div>
<div class="photos">
<img src="${images['pexels-andrea-piacquadio-821054.jpg']}" alt="" class="photo">
<img src="${images['pexels-edward-eyer-687824.jpg']}" alt="" class="photo">    
<img src="${images['pexels-helena-lopes-696218.jpg']}" alt="" class="photo">
<img src="${images['pexels-live-on-shot-2788792.jpg']}" alt="" class="photo">
<img src="${images['pexels-mali-maeder-64208.jpg']}" alt="" class="photo">
<img src="${images['pexels-picjumbocom-225228.jpg']}" alt="" class="photo">
<img src="${images['pexels-helena-lopes-1015568.jpg']}" alt="" class="photo">
<img src="${images['pexels-pixabay-262978.jpg']}" alt="" class="photo">
<img src="${images['pexels-helena-lopes-693269.jpg']}" alt="" class="photo">
<img src="${images['pexels-terje-sollie-299347.jpg']}" alt="" class="photo">
<img src="${images['pexels-valeria-boltneva-1484516.jpg']}" alt="" class="photo">
<img src="${images['pexels-lisa-fotios-1126728.jpg']}" alt="" class="photo">
</div>`

  return container;
};

export { photosTab };
