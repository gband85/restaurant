const homeTab = () => {
    document.querySelector("#home").classList.add("selected");
    document.querySelector("#contact").classList.remove("selected");
    document.querySelector("#menu").classList.remove("selected");
    main.innerHTML="";
    //create div

    const hero=document.createElement("section");
    hero.className="hero";
    const titleText=document.createElement("h1");
    titleText.textContent="Riverside Restaurant";
    hero.appendChild(titleText);
    //add testimonial
    // const image = document.createElement("img");
    // image.src="pexels-kaboompics-com-6267(3).jpg";
    // image.style.display=""


    //add testimonial
    const testimonial = document.createElement("section");
    testimonial.id="testimonial";
    const text = document.createElement("p");
    text.innerHTML="Best place I've ever eaten at!<br>-John Smith";
    testimonial.appendChild(text);
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
    main.appendChild(hero);
    const container = document.createElement("div");
    container.className="container";
    //add to content div
    container.appendChild(testimonial);
    container.appendChild(hours);
    container.appendChild(location);
main.appendChild(container);
content.appendChild(main);
}

export { homeTab }