// Append 16 divs to argument element
// Apply FlexBox styling to argument elemnet
// to fix new divs in a 16x16 grid
function createNxNDivs(container, n){
    const grid = [0,0];
    for(let i = 0; i < n*n; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        newDiv.addEventListener("mouseover", () => 
            newDiv.style.backgroundColor = "green");
        newDiv.style.flex = `0 0 calc(100% / ${n})`;
        newDiv.style.height = `calc(100% / ${n})`

        container.appendChild(newDiv);
    }
}

async function popUp(){
    let userSelection = await prompt("Enter integer from 1-100: ");
    let cancel = false;
    if(Number(userSelection) == NaN || 
    !(Number.isInteger(Number(userSelection))) ||
    Number(userSelection) < 1 || Number(userSelection) > 100){
        alert("Invalid Input! Try again!");
    }else{
        container.innerHTML = '';
        createNxNDivs(container, userSelection);
    }
    
}

const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", () => popUp());
createNxNDivs(container,16);