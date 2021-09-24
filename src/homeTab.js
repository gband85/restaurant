const homeTab = () => {
    const content = document.querySelector("#content");
    content.innerHTML="";
    const homeDiv = document.createElement("div");
    homeDiv.id="home-div";
    
    //main section
    const main = document.createElement("main");
    main.id = "main";
    main.append(document.createElement("h1").textContent="Home");
    const testimonial = document.createElement("div");
    const text = document.createElement("p");
    text.innerHTML="Best place I've ever eaten!<br>-John Smith";
    testimonial.appendChild(text);
    const hours = document.createElement("div");
    hours.id="hours";
    const hoursTable = document.createElement("table");
    hoursTable.id="hours-table";
    hoursTable.insertAdjacentHTML('afterbegin','<thead><tr><th colspan="2">Hours</th></tr></thead><tbody> \
    <tr><td>Sunday</td><td>12-5PM</td></tr> \
    <tr><td>Monday</td><td>8AM-8PM</td></tr> \
    <tr><td>Tuesday</td><td>8AM-8PM</td></tr> \
    <tr><td>Wednesday</td><td>8AM-8PM</td></tr> \
    <tr><td>Thursday</td><td>8AM-8PM</td></tr> \
    <tr><td>Friday</td><td>8AM-8PM</td></tr> \
    <tr><td>Saturday</td><td>12-5PM</td></tr> \
    </tbody>');
   // const test=
   hours.appendChild(hoursTable);
    //main.append(hours);
    //footer
    const footer = document.createElement("footer");
    footer.id = "footer";

    const location = document.createElement("div");
    const address = document.createElement("p");
    address.innerHTML="19125 First Street<br>North City, NE 27386";
    location.appendChild(address);
    //add to content div
    homeDiv.appendChild(testimonial);
    homeDiv.appendChild(hours);
    homeDiv.appendChild(location);
content.appendChild(homeDiv);
}

export { homeTab }