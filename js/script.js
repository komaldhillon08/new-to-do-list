console.log("komal");

let inputText = document.getElementById("input-text");
let listContainer = document.getElementsByClassName("list-container")[0]; // First list container

inputText.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (inputText.value.trim() === "") {
            alert("Type something");
        } else {
            // add li 
            let li = document.createElement("li");
            li.textContent = inputText.value;

            // add input 
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";  // Example text for the span
            checkbox.classList = "checkbox";

            checkbox.addEventListener("click", function (event) {
                // console.log(event.target);
                if (checkbox.checked) {
                    li.style.textDecoration = "line-through";

                } else {
                    li.style.textDecoration = "none";
                }

            })



            // add cross img 
            let img = document.createElement("img");
            img.src = "./assets/icon-cross.svg"
            img.classList.add("cross");

            img.addEventListener("click", function (event) {
                // console.log(event.target);
                let li = event.target.closest("li");
                if (li) {
                    li.remove();
                    console.log("itme - remove");

                } else {

                }

            })


            listContainer.appendChild(li);
            li.prepend(checkbox);
            li.appendChild(img);
            inputText.value = ""; // Clear input after adding


        }
    }
});
