const category = document.querySelector("#categories");
const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`)

const getEl = (item) => {
    return item.forEach((item) => {
        console.log(`Category: ${item.querySelector("h2").textContent}`);
        console.log(`Elements: ${item.querySelectorAll("li").length}`);
        
    });
};

getEl(listEl);