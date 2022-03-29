const reviewsTab = () => {
    document.querySelectorAll(".nav-list a").forEach(element => {
         element.classList.remove("selected");
    }); 
    document.querySelector("#reviews .link").classList.add("selected");
    if (document.querySelector('.hero')!=null) {
        content.removeChild(document.querySelector('.hero'));
        }
        content.removeChild(document.querySelector('.container'));
    
//    main.innerHTML="";
    const title=document.createElement("section");
    title.className="title"
    const titleText=document.createElement("h1");
    titleText.textContent="Reviews";
    title.appendChild(titleText);

    const Review1=document.createElement("section");
    Review1.className="review";
    const Review1Text = document.createElement("p");
    Review1Text.innerText=`Best place I've ever eaten at!
    -John Smith`;
    Review1.appendChild(Review1Text);   
    
    const Review2=document.createElement("section");
    Review2.className="review";
     const Review2Text = document.createElement("p");
    Review2Text.innerText=`Wonderful experience! Great service and delicious food. The schnozberries even tasted like schnozberries!
    -Charles Webster-Hammerman`
    Review2.appendChild(Review2Text);

    const Review3=document.createElement("section");
    Review3.className="review";
const Review3Text = document.createElement("p");
    Review3Text.innerText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    -Cicero`
    Review3.appendChild(Review3Text);

    const Review4=document.createElement("section");
    Review4.className="review";
const Review4Text = document.createElement("p");
    Review4Text.innerText=`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    -Elvis`
    Review4.appendChild(Review4Text);

    const Review5=document.createElement("section");
    Review5.className="review";
const Review5Text = document.createElement("p");
    Review5Text.innerText=`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
    -Cicero II`
    Review5.appendChild(Review5Text);

    const container = document.createElement("div");
container.className="container";
    //add to content div
    container.appendChild(title);
    container.appendChild(Review1);
    container.appendChild(Review2);
    container.appendChild(Review3);
    container.appendChild(Review4);
    container.appendChild(Review5);

    content.appendChild(container);
}

export { reviewsTab }