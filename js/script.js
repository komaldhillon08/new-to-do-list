console.log("komal");

let inputText = document.getElementById("input-text");
let listContainer = document.getElementsByClassName("list-container")[0]; // First list container

inputText.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (inputText.value.trim() === "") {
            alert("Type something");
        } else {
            let li = document.createElement("li"); 
            li.textContent = inputText.value; 
            listContainer.appendChild(li);
            inputText.value = ""; // Clear input after adding
        }
    }
});
