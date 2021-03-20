let target = document.querySelector(".todo_lists");
target.innerHTML = "Loading..."
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
        return res.json()
    })
    .then(todos => {
        let html;
        todos.forEach(todo => {
            html += `
            <div class="card my-4">
                <div class="card-body ${todo.completed ? "done" : "undone"}">
                <h5 class="card-title">Title: ${todo.title}</h5>
                <p class="card-text">
                    Status ${todo.completed ? "Selesai" : "Belum selesai" }
                </p>
                </div>
            </div>
            `
        })
        target.innerHTML = html;
    })