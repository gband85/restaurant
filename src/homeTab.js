const homeTab = () => {
    document.querySelector("#home").classList.add("selected");
    document.querySelector("#contact").classList.remove("selected");
    document.querySelector("#menu").classList.remove("selected");
    main.innerHTML="";
    //create div
    const homeDiv = document.createElement("div");
    homeDiv.id="home-div";
    const title=document.createElement("section");
    title.className="title"
    const titleText=document.createElement("h1");
    titleText.textContent="Riverside Restaurant";
    title.appendChild(titleText);
    //add testimonial
    const testimonial = document.createElement("section");
    testimonial.id="testimonial";
    const text = document.createElement("p");
    text.innerHTML="Best place I've ever eaten at!<br>-John Smith";
    testimonial.appendChild(text);
    //add hours
    const hours = document.createElement("section");
    hours.id="hours";
    const hoursTable = document.createElement("table");
    hoursTable.id="hours-table";
    hoursTable.innerHTML=`<thead><tr><th colspan="2">Hours</th></tr></thead><tbody>
    <tr><td>Sunday</td><td>12-5PM</td></tr>
    <tr><td>Monday</td><td>8AM-8PM</td></tr>
    <tr><td>Tuesday</td><td>8AM-8PM</td></tr>
    <tr><td>Wednesday</td><td>8AM-8PM</td></tr>
    <tr><td>Thursday</td><td>8AM-8PM</td></tr>
    <tr><td>Friday</td><td>8AM-8PM</td></tr> 
    <tr><td>Saturday</td><td>12-5PM</td></tr> 
    </tbody>`
   hours.appendChild(hoursTable);
//add address
    const location = document.createElement("section");
    location.id="location";
    const address = document.createElement("p");
    address.innerHTML="19125 First Street<br>North City, NE 27386";
    location.appendChild(address);
    homeDiv.appendChild(title);
    //add to content div
    homeDiv.appendChild(testimonial);
    homeDiv.appendChild(hours);
    homeDiv.appendChild(location);
main.appendChild(homeDiv);
content.appendChild(main);
}

export { homeTab }