const menuTab = () => {
  // if (document.querySelector(".hero") != null) {
  //   content.removeChild(document.querySelector(".hero"));
  // }
  // content.removeChild(document.querySelector(".container"));
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML=`
  <div class="title">
  <h1>Menu</h1>
  </div>

  <div class="menu-section">
    <p class="menu-title">BURGERS</p>
    <p class="menu-item">CLASSIC / 25</p>
    <p>A beef patty with caramelized onions,
    pickles, crispy lettuce, and juicy
    tomatoes.</p>
    <p class="menu-item">DOUBLE / 35</p>
    <p>Two quarter-pounder patties stuffed
    between potato buns, guaranteed to
    fill you up.</p>
    <p class="menu-item">DAREDEVIL / 40</p>
    <p>Three quarter-pounder patties stuffed
    between potato buns. Can you handle
    this?</p>
    </div>

    <div class="menu-section">
        <p class="menu-title">RICE MEALS</p>
        <p class="menu-item">PORK STEAK / 20</p>
        <p>Pork steak served with rice and a side
        of mashed potatoes, and a salad.</p>
        <p class="menu-item">CORDON BLEU / 20</p>
        <p>With creamy cheese, served with rice
        and mashed potatoes.</p>
        <p class="menu-item">STEAK / 30</p>
        <p>A 20 oz. steak, medium rare, served
        with mashed potatoes and mixed
        vegetables.</p>
        </div>

        <div class="menu-section">
        <p class="menu-title">SANDWICHES</p>
        <p class="menu-item">VEGAN PANINI / 15</p>
        <p>Roasted vegetables, in ciabatta,
        slathered with creamy hummus.</p>
        <p class="menu-item">ITALIAN SAUSAGE / 20<p>
        <p>Grilled Italian sausage with pickles,
        tomatoes, and mustard, with a relish.</p>
        <p class="menu-item">3-CHEESE / 20</p>
        <p>Swiss, chepar, and mozzarella, in a
        grilled sandwich slathered with
        butter.</p>
        </div>

        <div class="menu-section">
        <p class="menu-title">DRINKS</p>
        <p class="menu-item">JUICE / 5 PER GLASS</p>
        <p>Choice of orange, lemon, watermelon,
        mango, grape, or strawberry.</p>
        <p class="menu-item">ICED COFFEE / 10 PER GLASS</p>
        <p>Mixed with milk, and served over ice
        and topped with chocolate syrup.</p>
        <p class="menu-item">SHAKE / 15</p>
        <p>Watermelon, mango, strawberry-banana, mixed berries, or citrus.</p>
        </div>`;

return container;
};

export { menuTab };
