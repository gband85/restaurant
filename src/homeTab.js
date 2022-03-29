const homeTab = () => {
    document.querySelector(".nav-list li").classList.remove("selected");
    //document.querySelector("#contact").classList.remove("selected");
    document.querySelector("#home").classList.add("selected");
    // main.innerHTML="";
    //create div
if (document.querySelector('.hero')!=null) {
    content.removeChild(document.querySelector('.hero'));
}
if (document.querySelector('.container')!=null) {
   content.removeChild(document.querySelector('.container')); 
}

    const hero=document.createElement("div");
    hero.className="hero";
    const titleText=document.createElement("h1");
    titleText.textContent="Riverside Restaurant";
    hero.appendChild(titleText);

    //add hours
    const hours = document.createElement("section");
    hours.id="hours";
    hours.innerHTML=
    `
    <div class="days">
    <p>Sunday</p>
    <p>Monday</p>
    <p>Tuesday</p>
    <p>Wednesday</p>
    <p>Thursday</p>
    <p>Friday</p> 
    <p>Saturday</p>
</div>
<div class="times">
    <p>12-5PM</p>
    <p>8AM-8PM</p>
    <p>8AM-8PM</p>
    <p>8AM-8PM</p>
    <p>8AM-8PM</p>
    <p>8AM-8PM</p> 
    <p>12-5PM</p>
    </div>
    `
//add address
    const location = document.createElement("section");
    location.id="location";
    const address = document.createElement("p");
    address.innerHTML="19125 First Street<br>North City, NE 27386";
    location.appendChild(address);
    content.appendChild(hero);
    const container = document.createElement("div");
    container.className="container";
    //add to content div
    container.appendChild(testimonial);
    container.appendChild(hours);
    container.appendChild(location);

content.appendChild(container);
}

export { homeTab }