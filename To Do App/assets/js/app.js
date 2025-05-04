const inputBox = document.getElementById('input-box');
const liContainer =document.getElementById('list-container');
const btn = document.getElementById('btn');

btn.addEventListener('click', addToDo);

function addToDo(e) {
    e.preventDefault(); 
    if ( inputBox.value === '' ) {
        document.getElementById ('error-message').style.display = "block";
    } else { 
        const Ul = liContainer;

        const li = document.createElement('li');
        li.className = 'todo-item done';
        li.textContent = inputBox.value;

        const newBtns = document.createElement('span');
        newBtns.id = 'completed';

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-check';

        newBtns.appendChild(icon);
        li.appendChild(newBtns);
        Ul.appendChild(li);           
    }    
}