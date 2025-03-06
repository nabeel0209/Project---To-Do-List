const textInput = document.getElementById('textInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let listArray = []
let editIndex = -1;

addBtn.addEventListener("click", function() {
    const task = textInput.value.trim(); // To remove unnecessary spaces in words

    if (task !== "") {
        
        if (editIndex === -1) {
            
            listArray.push(task);
        } else {
            // Update existing task
            listArray[editIndex] = task;
            editIndex = -1; // Reset edit mode
            addBtn.textContent = "Add Task"; // Reset button text
        }
        
        addItems();  // Function to update the list in html 
        textInput.value = ""; 
    }

    else {
        alert('Enter a task')
    }
});


function addItems() {
    taskList.innerHTML = '' // To clear the list once item is added and avoid duplication
    listArray.forEach((item, index) => { // To cycle through all items added in the list 
        const li = document.createElement('li')
        li.textContent = item

        // Creating Div to group both buttons

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttonContainer");

        // Creating Delete Button for each item 

             const deleteBtn = document.createElement("button");
             deleteBtn.textContent = "Delete";
             deleteBtn.classList.add("deleteBtn");

        // Remove item when delete button is clicked
            deleteBtn.onclick = function() {
            listArray.splice(index, 1); 
            addItems()}; 

        // Creating Edit Button 

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("editBtn");
    
        // Edit task event
            editBtn.onclick = function() {
            textInput.value = item; // Set task back in input field
            editIndex = index; // Store index of task being edited
            addBtn.textContent = "Update Task"; // Change button text
            }

            buttonContainer.appendChild(editBtn);
            buttonContainer.appendChild(deleteBtn);
            li.appendChild(buttonContainer)
            taskList.appendChild(li) // appendChild is used to append (add/join) an element as a child element of the original element

    })
}