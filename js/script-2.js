/* let toDoList = []



let inputText = document.getElementById("input-text");
let listContainer = document.getElementsByClassName("list-container")[0]; // First list 
let mainListContainer = document.getElementById("main-list-container");
let itemCount = document.getElementById("itemcount");

let count = 0;



/* function updateItemCount() {
    itemCount.textContent = listContainer.children.length;
} */

/* function deleteToDo(id) {
    toDoList = toDoList.filter(item => item.id !== id);
    renderToDoList(toDoList);
}
*/

/* function checkToDo(id) {

   
    renderToDoList(toDoList);
    // toDoList = toDoList.map(item => item.id !==id{})
    console.log("todo --", toDoList, id)
    let itemIndex = toDoList.findIndex(item => item.id === id);
    console.log("itemIndex", itemIndex)

    toDoList[itemIndex].checked = !toDoList[itemIndex].checked;

    renderToDoList(toDoList)




}  */
/* function crossToDo(id) {
    let 
} */



/* function renderToDoList(list) {
    console.log("check");
    listContainer.innerHTML = "";
    list.forEach((item, index) => {
        // 
        console.log("item >>>>", item, index);
        
        let li = document.createElement("li");
        li.textContent = item.name;
        li.setAttribute("data-id", item.id);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";  // Example text for the span
        checkbox.classList = "checkbox";
        checkbox.checked = item.checked;
        checkbox.onclick = () => checkToDo(item.id)
        if (item.checked === true) {
            li.style.textDecoration = "line-through";
        }


        let img = document.createElement("img");
        img.src = "./assets/icon-cross.svg"
        img.classList.add("cross");
        img.setAttribute("data-id", item.id);
        img.onclick = () => deleteToDo(item.id)


        listContainer.appendChild(li);
        li.prepend(checkbox);
        li.appendChild(img);

    });
}

inputText.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (inputText.value.trim() === "") {
            alert("Type something");
        } else {
            // add li 
            toDoList.push({
                name: inputText.value,
                id: toDoList.length + 1,
                checked: false,
            });
            renderToDoList(toDoList);
 */

            // console.log("array >", toDoList)

            // let li = document.createElement("li");
            // li.textContent = inputText.value;
            // mainListContainer.style.display = "block";
            // count += 1;
            // itemCount.innerHTML = `items left ${count}`
            // // add input 
            // let checkbox = document.createElement("input");
            // checkbox.type = "checkbox";  // Example text for the span
            // checkbox.classList = "checkbox";

            // checkbox.addEventListener("click", function (event) {
            //     // console.log(event.target);
            //     if (checkbox.checked) {
            //         li.style.textDecoration = "line-through";
            //         count -= 1;

            //     } else {
            //         li.style.textDecoration = "none";
            //         count += 1;
            //     }
            //     itemCount.innerHTML = `items left ${count}`
            // })
            // // add cross img 
            // let img = document.createElement("img");
            // img.src = "./assets/icon-cross.svg"
            // img.classList.add("cross");

            // img.addEventListener("click", function (event) {
            //     // console.log(event.target);
            //     let li = event.target.closest("li");
            //     if (li) {
            //         li.remove();
            //       /*   updateItemCount(); */
            //       count -= 1;
            //       itemCount.innerHTML = `items left ${count}`


            //     }
            //     if (listContainer.children.length === 0) {
            //         mainListContainer.style.display = "none";
            //     }
            // })
            // listContainer.appendChild(li);
            // li.prepend(checkbox);
            // li.appendChild(img);
            // inputText.value = ""; // Clear input after adding

            /*  updateItemCount(); */
        // }
    // }
// });




 