// ===== Data =====
const tasks = [
    { text: "Revise DOM selectors", done: false },
    { text: "Push Lab Sheet 01 to GitHub", done: true },
    { text: "Read MDN: Introduction to events", done: false }
];

// ===== Page elements =====
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const message = document.getElementById("message");
const list = document.getElementById("task-list");
const summary = document.getElementById("summary");

// TODO 1: Build and return one <li> for a task, using createElement
// and textContent only (no innerHTML). It should look like:
//   <li data-index="0" class="done">
//     <span>Revise DOM selectors</span>
//     <button type="button" class="delete-btn">✕</button>
//   </li>
// Add the class "done" only when task.done is true.
function createTaskItem(task, index) {
    // your code here
}

function render() {
    list.textContent = ""; // clears the old items

    // TODO 2: Loop through tasks and append createTaskItem(task, i) to list.

    // TODO 3: Show this in summary.textContent:
    //   3 tasks | 1 done | 2 to go
}

// TODO 4: When the form is submitted:
//   - stop the page reloading with preventDefault()
//   - if the input is empty (or only spaces), show an error in message
//     and stop with return
//   - otherwise push { text, done: false } into tasks, clear the input,
//     show "Task added." and call render()
form.addEventListener("submit", (e) => {
    // your code here
});

// TODO 5: ONE click listener for the whole list (event delegation):
//   - if a .delete-btn was clicked, remove that task with splice
//   - otherwise flip that task's done value
//   - then call render()
list.addEventListener("click", (e) => {
    const item = e.target.closest("li");
    if (!item) return;
    const index = Number(item.dataset.index);
    // your code here
});

render();
