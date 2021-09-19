const loadPage = () => {
    const main=document.createElement("main");
    document.querySelector("#content").append(main);
    console.log("Hello!");
}

export default loadPage