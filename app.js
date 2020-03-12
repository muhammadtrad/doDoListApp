const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem(){
    todoInputEl.addEventListener("keypress", function(event){
        if (event.keyCode === 13){
            let newListItem = createListItem(todoInputEl.value);
            todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
            //todoListEl.appendChild(newListItem);
            todoInputEl.value = '';
        }
    })
}
//does not work. Due to bubbling and propagation
// function toggleDone(){
//     for (let elem of todoItemEls){
//         elem.addEventListener("click", function(){
//             elem.classList.toggle("done");
//         })
//     }
// }

function toggleDone(){
    todoListEl.addEventListener("click", function(event){
        if (event.target.classList.contains("todo__item")){
        event.target.classList.toggle("done");
        }
    })
}


function createListItem(text){
    const newListElement = document.createElement("li");
    const newListElementx =  document.createElement("span");
    newListElementx.textContent = "x";
    newListElementx.setAttribute("class", "close");
    newListElement.setAttribute("class", "todo__item");
    newListElement.textContent = text;
    newListElement.appendChild(newListElementx);
    return newListElement;
}

function removeListItem(){
    todoListEl.addEventListener("click", function(event){
        if (event.target.classList.contains("close")){
            event.target.parentNode.remove();
        }
    })

}


toggleDone();
addListItem();
removeListItem();