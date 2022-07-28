// initiate size (number of grid cells per row) and side length of each cell
let size, length;


// create the parent node
const container = document.querySelector('.container'); 

// adds popup to ask for user's input for grid 
document.getElementById('myBtn').addEventListener('click', () => { 
    let input = prompt("Enter the number of squares per side you want"); 
    size = parseFloat(input); 
    //console.log("size: ", size);
    if (input == null || input > 100 || input == NaN || input == 0) { 
        alert("You must enter a valid number equal to or less than 100");
    } else { 
        length = parseFloat((1000 / size).toFixed(2)); 
        //console.log("length: ", length);
        if(container.firstChild == null) { 
            makeGrid(size);
        } else {  
            cleared();
            makeGrid(size);
        } 
    }
});  

// make a grid cell based on the side length 
function makeCell () { 
    let div = document.createElement('div');
    div.classList.add('cell'); 
    div.style.width=(`${length}px`);  
    div.style.height=(`${length}px`);
    div.addEventListener('mouseover', () => { 
        div.setAttribute('style', 'background-color: black')
    }) 
    return div;
}


// create the grid based on input number of grid cells
function makeGrid(size) {
    for(let i = 0; i < size; i++) { 
        for (let j = 0; j < size; j++) { 
            container.appendChild(makeCell());
        }
    }  
}

// clears away current grid
function cleared() { 
    while(container.firstChild) { 
        container.removeChild(container.firstChild);
    }
}
