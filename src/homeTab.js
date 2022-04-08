const homeTab = () => {
  const hero=document.createElement("div");
  hero.className="hero"
  hero.innerHTML=`
  <h1>Riverside Restaurant</h1>`

  const container=document.createElement("div");
container.className="container"
container.innerHTML=`
    <div id="hours">
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
  </div>
  <div id="location">
      <p>19125 First Street<br>North City, NE 27386</p>
  </div>
  `

  return {hero,container};
};

export { homeTab };
