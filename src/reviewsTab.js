const reviewsTab = () => {
  // document.querySelectorAll(".nav-list a").forEach((element) => {
  //   element.classList.remove("selected");
  // });
  // document.querySelector("#reviews .link").classList.add("selected");
  // if (document.querySelector(".hero") != null) {
  //   content.removeChild(document.querySelector(".hero"));
  // }
  // content.removeChild(document.querySelector(".container"));

  //    main.innerHTML="";
  const container = document.createElement("div");
  container.className = "container";
container.innerHTML=
  `<div class="title">
    <h1>Reviews</h1>
  </div>
<div class="review">
    <p>Best place I've ever eaten!</p>
    <p>-John Smith</p>
</div>
<div class="review">
    <p>Wonderful experience! Great service and delicious food. The schnozberries even tasted like schnozberries!</p>
    <p>-Charles Webster-Hammerman</p>
</div>
<div class="review">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>-Cicero</p>
</div>
<div class="review">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <p>-Elvis</p>
</div>
<div class="review">
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    <p>-Cicero II</p>
</div>
`
return container;
};

export { reviewsTab };
