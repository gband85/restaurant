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
    const element=document.createElement("dl")
    menuDiv.append()
    menuDiv.innerHTML = `
    <div class="menu-section">
    <p class="menu-title">BURGERS</p>
    <dl>
    <dt>CLASSIC / 25</dt>
    <dd>A beef patty with caramelized onions,
    pickles, crispy lettuce, and juicy
    tomatoes.</dd>
    <dt>DOUBLE / 35</dt>
    <dd>Two quarter-pounder patties stuffed
    between potato buns, guaranteed to
    fill you up.</dd>
    <dt>DAREDEVIL / 40</dt>
    <dd>Three quarter-pounder patties stuffed
    between potato buns. Can you handle
    this?</dd>
    </dl>
    </div>
    <div class="menu-section">
    <p class="menu-title">RICE MEALS</p>
    <dl>
    <dt>PORK STEAK / 20</dt>
    <dd>Pork steak served with rice and a side
    of mashed potatoes, and a salad.</dd>
    <dt>CORDON BLEU / 20</dt>
    <dd>With creamy cheese, served with rice
    and mashed potatoes.</dd>
    <dt>STEAK / 30</dt>
    <dd>A 20 oz. steak, medium rare, served
    with mashed potatoes and mixed
    vegetables.</dd>
    </dl>
    </div>
    <div class="menu-section">
    <p  class="menu-title">SANDWICHES</p>
    <dl>
    <dt>VEGAN PANINI / 15</dt>
    <dd>Roasted vegetables, in ciabatta,
    slathered with creamy hummus.</dd>
    <dt>ITALIAN SAUSAGE / 20<dt>
    <dd>Grilled Italian sausage with pickles,
    tomatoes, and mustard, with a relish.</dd>
    <dt>3-CHEESE / 20</dt>
    <dd>Swiss, cheddar, and mozzarella, in a
    grilled sandwich slathered with
    butter.</dd>
    </dl>
    </div>
    <div class="menu-section">
    <p class="menu-title">DRINKS</p>
    <dl>
    <dt>JUICE / 5 PER GLASS</dt>
    <dd>Choice of orange, lemon, watermelon,
    mango, grape, or strawberry.</dd>
    <dt>ICED COFFEE / 10 PER GLASS</dt>
    <dd>Mixed with milk, and served over ice
    and topped with chocolate syrup.</dd>
    <dt>SHAKE / 15</dt>
    <dd>Watermelon, mango, strawberry-banana, mixed berries, or citrus.</dd>
    </dl>
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