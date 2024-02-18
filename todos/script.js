const form = document.querySelector('.form');
const input = form.querySelector('.todo-input');
const submitBtn = form.querySelector('.submit-btn');
let todos = [];

const todoContainer = document.querySelector('.show-todo');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const addedTodo = input.value.trim(); 
    if (addedTodo !== '') { 
        todos.push(addedTodo);
        renderTodos(); 
        input.value = "";
    }
});

function renderTodos() {
    todoContainer.innerHTML = "";
    todos.forEach((todo, idx) => {
        const output = document.createElement('div');
        output.className = 'output';
        const todoelement = document.createElement('p');
        const removeBtn = document.createElement('button');
        todoelement.textContent = `${idx+1}: ${todo}`;
        removeBtn.textContent = 'remove';
        output.appendChild(todoelement);
        output.appendChild(removeBtn);
        todoContainer.appendChild(output);
        removeBtn.setAttribute('data-index', idx);
        removeBtn.addEventListener('click', (e) => {
            const indexToRemove = parseInt(e.target.getAttribute('data-index'));
            todos.splice(indexToRemove, 1); 
            renderTodos(); 
        });
    });
}
