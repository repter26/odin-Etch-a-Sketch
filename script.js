let size = 16;

run();

function run() {
    const container = document.querySelector("#container");

for(let i = 0; i < size; i++) {
    const subContainer = document.createElement("div");
    subContainer.classList.add("subContainer");
    container.appendChild(subContainer);

}

const subContainers = document.querySelectorAll(".subContainer");
subContainers.forEach( subContainer => {
    for(let i = 0; i < size; i++) {
    const divs = document.createElement("div");
    divs.classList.add("divs");
    subContainer.appendChild(divs);
    }
});

const divs = document.querySelectorAll(".divs");

divs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.classList.add("blue");
    }
    )
});
}

const btn = document.querySelector(".size");
btn.addEventListener("click", () => {
    do{
        size = prompt("choose grid-size between 16px and 100px");
    }while(size > 100 || size < 16);
    

    
    run();
    const divs = document.querySelectorAll(".divs");
    divs.forEach(div => {
        div.classList.remove("blue");

    });
    
});





