const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener('change', function() {
            li.classList.toggle('checked', this.checked);
        });

        // Add task text directly inside li, instead of span
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(inputBox.value));

        // Create delete button
        let span = document.createElement("span");
        span.innerHTML = "&#x1F5D1;";  // Trash bin icon
        span.classList.add('bin');
        span.addEventListener("click", function() {
            li.remove();
        });

        listContainer.appendChild(li);

        li.appendChild(span);

        inputBox.value = '';
        
    }
}

