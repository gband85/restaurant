const menuTab = () => {
    document.querySelector("#home").classList.remove("selected");
    document.querySelector("#contact").classList.remove("selected");
    document.querySelector("#menu").classList.add("selected");
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";

    // //main section
    // const main = document.createElement("div");
    // main.id = "main";
    menuDiv.innerHTML = `
    <div class="menu-section">
    <p>BURGERS</p>
    <p>CLASSIC / 25<br>
    A beef patty with caramelized onions,
    pickles, crispy lettuce, and juicy
    tomatoes.</p>
    <p>DOUBLE / 35<br>
    Two quarter-pounder patties stuffed
    between potato buns, guaranteed to
    fill you up.</p>
    <p>DAREDEVIL / 40<br>
    Three quarter-pounder patties stuffed
    between potato buns. Can you handle
    this?</p>
    </div>
    <div class="menu-section">
    <p>RICE MEALS</p>
    <p>PORK STEAK / 20<br>
    Pork steak served with rice and a side
    of mashed potatoes, and a salad.</p>
    <p>CORDON BLEU / 20<br>
    With creamy cheese, served with rice
    and mashed potatoes.</p>
    <p>STEAK / 30<br>
    A 20 oz. steak, medium rare, served
    with mashed potatoes and mixed
    vegetables.</p>
    </div>
    <div class="menu-section">
    <p>SANDWICHES</p>    
    <p>VEGAN PANINI / 15<br>
    Roasted vegetables, in ciabatta,
    slathered with creamy hummus.</p>
    <p>ITALIAN SAUSAGE / 20<br>
    Grilled Italian sausage with pickles,
    tomatoes, and mustard, with a relish.</p>
    <p>3-CHEESE / 20<br>
    Swiss, cheddar, and mozzarella, in a
    grilled sandwich slathered with
    butter.</p>
    </div>
    <div class="menu-section">
    <p>DRINKS</p>
    <p>JUICE / 5 PER GLASS<br>
    Choice of orange, lemon, watermelon,
    mango, grape, or strawberry.</p>
    <p>ICED COFFEE / 10 PER GLASS<br>
    Mixed with milk, and served over ice
    and topped with chocolate syrup.</p>
    <p>SHAKE / 15<br>
    Watermelon, mango, strawberry-banana, mixed berries, or citrus.</p>
    </div>`
    //document.createElement("p").textContent="Menu");
    // main.append()

    //footer
    const footer = document.createElement("footer");
    footer.id = "footer";
    //add to content div
    //menuDiv.appendChild(header);
    //menuDiv.appendChild(main);
    //menuDiv.appendChild(footer);
    content.appendChild(menuDiv);
}

export { menuTab }