const form = document.querySelector('#to-do-submit-form')
const inputEntry = document.querySelector('#item-entry')
const buttonAdd = document.querySelector('#btn-add-to-do')
const list = document.querySelector('#to-do-list')


buttonAdd.addEventListener('click', addItemHandler);

inputEntry.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addItemHandler();
    }

})

function addItemHandler() {
    if (inputEntry.value == '') return; // early return

    const listItem = document.createElement('li');
    listItem.textContent = inputEntry.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'

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


