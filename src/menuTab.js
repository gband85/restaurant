const menuTab = () => {
    document.querySelector(".nav-list li").classList.remove("selected");
    //document.querySelector("#contact").classList.remove("selected");
    document.querySelector("#menu").classList.add("selected");
    if (document.querySelector('.hero')!=null) {
        content.removeChild(document.querySelector('.hero'));
        }
        content.removeChild(document.querySelector('.container'));
    // main.innerHTML = "";
    const title=document.createElement("section");
    title.className="title";
    const titleText=document.createElement("h1");
    titleText.textContent="Menu"
    title.appendChild(titleText);
    const burgerSection = document.createElement("section");
    burgerSection.className="menu-section";
    burgerSection.innerHTML=`
    <p class="menu-title">BURGERS</p>
    <p>CLASSIC / 25</p>
    <p>A beef patty with caramelized onions,
    pickles, crispy lettuce, and juicy
    tomatoes.</p>
    <p>DOUBLE / 35</p>
    <p>Two quarter-pounder patties stuffed
    between potato buns, guaranteed to
    fill you up.</p>
    <p>DAREDEVIL / 40</p>
    <p>Three quarter-pounder patties stuffed
    between potato buns. Can you handle
    this?</p>
    `
    const riceSection = document.createElement("section");
    riceSection.className="menu-section";
    riceSection.innerHTML=`
        <p class="menu-title">RICE MEALS</p>
        <p>PORK STEAK / 20</p>
        <p>Pork steak served with rice and a side
        of mashed potatoes, and a salad.</p>
        <p>CORDON BLEU / 20</p>
        <p>With creamy cheese, served with rice
        and mashed potatoes.</p>
        <p>STEAK / 30</p>
        <p>A 20 oz. steak, medium rare, served
        with mashed potatoes and mixed
        vegetables.</p>
        `
        const sandwichSection = document.createElement("section");
        sandwichSection.className="menu-section";
        sandwichSection.innerHTML=`
        <p class="menu-title">SANDWICHES</p>
        <p>VEGAN PANINI / 15</p>
        <p>Roasted vegetables, in ciabatta,
        slathered with creamy hummus.</p>
        <p>ITALIAN SAUSAGE / 20<p>
        <p>Grilled Italian sausage with pickles,
        tomatoes, and mustard, with a relish.</p>
        <p>3-CHEESE / 20</p>
        <p>Swiss, chepar, and mozzarella, in a
        grilled sandwich slathered with
        butter.</p>`
        const drinkSection = document.createElement("section");
        drinkSection.className="menu-section";
        drinkSection.innerHTML=`
        <p class="menu-title">DRINKS</p>
        <p>JUICE / 5 PER GLASS</p>
        <p>Choice of orange, lemon, watermelon,
        mango, grape, or strawberry.</p>
        <p>ICED COFFEE / 10 PER GLASS</p>
        <p>Mixed with milk, and served over ice
        and topped with chocolate syrup.</p>
        <p>SHAKE / 15</p>
        <p>Watermelon, mango, strawberry-banana, mixed berries, or citrus.</p>`
       // content.innerHTML="";
        //const main = document.querySelector("main");
       // content.removeChild(main)
       //headerModule();
    //    main.innerHTML="";
    const container = document.createElement("div");
    container.className="container";
    container.appendChild(title);
    container.appendChild(burgerSection);
    container.appendChild(riceSection);
    container.appendChild(sandwichSection);
    container.appendChild(drinkSection);
        
        content.appendChild(container);
}

export { menuTab }