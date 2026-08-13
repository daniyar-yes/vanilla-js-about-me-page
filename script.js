const form = document.querySelector('#to-do-submit-form')
const inputEntry = document.querySelector('#item-entry')
const buttonAdd = document.querySelector('#btn-add-to-do')
const list = document.querySelector('#to-do-list')

let idCounter = 1;


buttonAdd.addEventListener('click', function (event) {
    if (inputEntry.value === '') {
        console.warn('From BUTTON: empty string, returning');
        return;
    }
    addItemHandler();
});
//how can we guard the btn add event listener from firing with empty strings

inputEntry.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (inputEntry.value === '') {
            console.warn('From ENTER: empty string, returning');
            return;
        };
        addItemHandler();
    }

})

function addItemHandler() {
    if (inputEntry.value === '') {
        console.warn('Last guard from function: empty string, returning');
        return;
    };
    const listItem = document.createElement('li');
    listItem.id = `list-item-${idCounter}`
    idCounter = idCounter + 1;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `my-checkbox-${idCounter}`;
    checkbox.addEventListener('click', () => {
        listItem.classList.toggle('checked-item');
    })

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️'

    listItem.textContent = inputEntry.value;

    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    deleteButton.addEventListener('click', () => {
        listItem.remove()
    })

    inputEntry.value = '';
    inputEntry.focus();

}




// we need to learn how to `appendChild` to a to-do-list (<li></li>)
// textContent
// how to createElement in HTML via JS
// how to delete elements from parent Node (element)

// CRUD (full-stack, Front and Back end)
// Create, Read, Update, Delete


