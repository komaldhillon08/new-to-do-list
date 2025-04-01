console.log("komal");

let inputText = document.getElementById("input-text");
let listContainer = document.getElementsByClassName("list-container")[0]; // First list container

inputText.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (inputText.value.trim() === "") {
            alert("Type something");
        } else {
            // add li 
            let li = document.createElement("li"); 
            li.textContent = inputText.value; 
            listContainer.appendChild(li);

          // add input 
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox" ;  // Example text for the span
            checkbox.classList = "checkbox" ;

          // add cross img 
          let img = createElement("img") ; 
          img.src = "./assets/icon-cross.svg"


           li.prepend(checkbox);
            inputText.value = ""; // Clear input after adding
        }
    }
});
