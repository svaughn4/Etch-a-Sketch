let size;  
// create the parent node
const container = document.querySelector('.container'); 

// adds popup to ask for user's input for grid 
document.getElementById('myBtn').addEventListener('click', () => { 
    let input = prompt("Enter the number of squares per side you want"); 
    size = parseInt(input);
    console.log(size);
    if (input == null || input > 100 || input == NaN) { 
        alert("You must enter a valid number equal to or less than 100");
    } else { 
        if(container.firstChild == null) { 
            makeGrid(size);
        } else {  
            cleared();
            makeGrid(size);
        } 
    }
});  

// create the grid based on input
function makeGrid(size) {
    for(let i = 1; i <= size; i++) { 
        // create mini div for each row
        const mini = document.createElement('div');  
        mini.classList.add('row');
        for (let j = 1; j <= size; j++) { 
            let child = document.createElement('div');
            child.classList.add('cell');  

            // add border to each cell
            child.style.border='1px solid black';  

            // add hover event listener to each cell
            child.addEventListener('mouseover', () => {
                child.setAttribute('style', 'background-color: black')
            })
            //child.textContent= 'hey'; 
            mini.appendChild(child);
        }
        container.appendChild(mini);
    }  
}

// clears away current grid for the new requested grid
function cleared() { 
    while(container.firstChild) { 
        container.removeChild(container.firstChild);
    }
}
