// create the parent node
const container = document.querySelector('.container');

// loop through to create 16 X 16 grid
for(let i = 1; i <= 16; i++) { 
    // create mini div for each row
    const mini = document.createElement('div');  
    mini.classList.add('row');
    for (let j = 1; j <= 16; j++) { 
        const child = document.createElement('div');
        child.classList.add('cell'); 
        child.style.borderColor='red';
        //child.textContent= 'hey'; 
        mini.appendChild(child);
    }
    container.appendChild(mini);
} 

document.querySelectorAll('.cell').forEach(div => {
    div.style.border = '1px solid black';
})


