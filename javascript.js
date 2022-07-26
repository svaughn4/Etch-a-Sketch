let size = 16; 

// adds popup to ask for user's input for grid 
document.getElementById('myBtn').addEventListener('click', () => { 
    let input = prompt("Enter the number of squares per side you want"); 
    size = parseInt(input);
    console.log(size);
    if (input == null || input > 100 || input == NaN) { 
        alert("You must enter a valid number equal to or less than 100");
    } else { 
        makeGrid(size);
    }
});  

// create the parent node
const container = document.querySelector('.container'); 

// create the grid based on input
function makeGrid(size) {
    for(let i = 1; i <= size; i++) { 
        // create mini div for each row
        const mini = document.createElement('div');  
        mini.classList.add('row');
        for (let j = 1; j <= size; j++) { 
            const child = document.createElement('div');
            child.classList.add('cell'); 
            child.style.borderColor='red';
            //child.textContent= 'hey'; 
            mini.appendChild(child);
        }
        container.appendChild(mini);
    }  
}

// add hover event listener to each cell
document.querySelectorAll('.cell').forEach(div => {
    div.style.border = '1px solid black'; 
    div.addEventListener('mouseover', event => { 
        div.setAttribute('style', 'background-color: black;')
    });
})


