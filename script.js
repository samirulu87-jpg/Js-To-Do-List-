let todoArray = [];
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

// Challenge: Try and using your addTaskButton with a "keydown" eventlistener
// and create a way to use the enter key to submit a new list item.
document.addEventListener("keydown" , (e) => { //checks to listen for a key to be pressed 
  if (e.key === "Enter") { //checks if that key is the Enter button or not 
    e.preventDefault(); //stops the page from reloading 
    addTaskButton.click(); //connects it to the next click listener function
  }
});


addTaskButton.addEventListener("click", (e) => {
  e.preventDefault(); // This prevents the page from reloading.

  // start by setting a variable named todo to equal localstorage.getitem("todo")
  // Add code below this line

  let  todo = localStorage.getItem("todo");

  if (todo === null) { //checks to see if there is any information is the local storage 
    todoArray = []; //if not then it will start adding to it 
  } else {
    todoArray = JSON.parse(todo); //if so it will grab it 
  } ;
  // check if todo is null, if it is set todoArray = []
  // else set todoArray to JSON.parse() your variable passed into the parse method.

  // check if text.value is empty, alert that the input is empty and return
  if (text.value.trim() === "") {
  alert("please input an item")
  return false;
  };
 
  // now that you've parsed the value, push the text.value to the todoArray.
  // set the text.value to an empty string.
  // get the localstorage method and use the setItem and pass in todo
  // and pass in JSON.stringify(todoArray).
  // lastly call display todo method

  todoArray.push(text.value);
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});

// Add code below this comment to do the following:
// 1. when the page loads, call displayTodo() method

// This method is already in place for you.
function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
          <p class='w-full text-white font-bold'>${list}</p>
          <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
          <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
       </div>`;
  });
  listBox.innerHTML = htmlCode;
}

function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
displayTodo();
  // call the todo and let it equal localstorage.getitem("todo")
  // assign the todoArray equal to JSON.parse(todo)
  // use the todoArray and use the splice method on the ind and pass in 1 as well.
  // set the todo in local storage and use the JSON.stringify(todoArray)
  // call the display todo method
}

function edit(ind) {
  saveInd.value = ind;
   let todo = localStorage.getItem("todo");
   todoArray = JSON.parse(todo); 
   text.value = todoArray[ind]; 
   addTaskButton.style.display = "none";
  saveTaskButton.style.display = "block";

  // set the saveInd.value equal to the ind
  // call the todo and let it equal localstorage.getitem("todo")
  // assign the todoArray equal to JSON.parse(todo)
  // assign the text.value to the array and get the index [ind].
  // set the addTaskButton display to none
  // set the saveTaskButton display to block
}

saveTaskButton.addEventListener("click", () => { 
  // this is the challenge for this project
  // in this part you will need to add the following:
  let todo = localStorage.getItem("todo")
  todoArray = JSON.parse(todo);
  let id = saveInd.value;
  todoArray[id] = text.value;
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
   text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
  // 1. call the todo and let it equal localstorage.getitem("todo")
  // 2. assign the todoArray equal to JSON.parse(todo)
  // then finish out the rest of the following instructions:
  // 1. let id be the same as your saveInd.value
  // 2. switch the add and save displays to block and none respectively.
  // 3. set text value to empty
  // 4. and use the localstorage method setItem, pass in todo and stringify the array.
  // 5. display todo method called.
});