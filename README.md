This includes a site that has a working To Do list, you can add, delete or edit different items on the list. All of this is coded in Java Script. 
link: https://samirulu87-jpg.github.io/Js-To-Do-List-/

      script.js 
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
--------------------------------------------------------------
      index.html 
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="style.css" />
          <title>Todo list 3</title>
        </head>
        <body>
          <div
            class="h-100 w-full flex items-center justify-center font-sans mt-20"
          >
            <div
              class=" rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg , box"
            >
              <div class="mb-4">
                <h1 class="text-3xl md:text-4xl font-medium mb-2">
                  To-Do List App
                </h1>
                <div class="flex mt-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    name="text"
                    id="text"
                    placeholder="Add Todo"
                  />
                  <input type="hidden" id="saveIndex" />
                  <button
                    class="p-2 lg:px-4 md:mx-2 text-center text-white border border-solid  rounded text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                    id="add-task-btn"
                  >
                    Add
                  </button>
                  <button
                    class="p-2 lg:px-4 md:mx-2 text-center border border-solid border-teal-600 rounded text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                    style="display: none"
                    id="save-todo-btn"
                  >
                    Edit Todo
                  </button>
                </div>
              </div>
              <div id="listBox"></div>
            </div>
          </div>
          <!-- <div
            class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans mt-20"
          >
            <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
              <div class="mb-4">
                <h1 class="text-3xl md:text-4xl text-indigo-600 font-medium mb-2">
                  To-Do List App
                </h1>
                <div class="flex mt-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    name="text"
                    id="text"
                    placeholder="Add Todo"
                  />
                  <input type="hidden" id="saveIndex" />
                  <button
                    class="p-2 lg:px-4 md:mx-2 text-center border border-solid border-indigo-600 rounded text-white bg-indigo-600 transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                    id="add-task-btn"
                  >
                    Add
                  </button>
                  <button
                    class="p-2 lg:px-4 md:mx-2 text-center border border-solid border-indigo-600 rounded bg-indigo-600 text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                    style="display: none"
                    id="save-todo-btn"
                  >
                    Edit Todo
                  </button>
                </div>
              </div>
              <div id="listBox"></div>
            </div>
          </div> -->
          <script src="./script.js"></script>
        </body>
      </html>
