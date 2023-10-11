

const toggleRest = event => {
    
    //get every article to sort the active one
    let articles = document.getElementsByTagName("article");

    // get active section
    let index = -1;
    for (const article of articles) {
        index = (article.dataset.status = "active") ? article.dataset.index : -1;
    }

    // works as great but wanted to iterate the classic way
    /*
        Array.from(document.getElementsByTagName("article").forEach(e => {
            if (e.dataset.status = "active") index = e.dataset.index;
        });
    */

    // change body to scroll possible
    document.getElementById("work-body").style.overflowY = "scroll";

    // scroll to the rest part of the active article
    document.getElementById(`rest-${index}`).scrollIntoView({behavior: "smooth"})
};

// add toggleRest to + buttons when clicked
Array.from(document.getElementsByClassName("plus")).forEach(element => {
    element.addEventListener("click", toggleRest);
});