const buttonEL = document.querySelector(".botao")
var inputEl = document.querySelector(".inputTask")
var taskListEl = document.querySelector(".taskList")
var listTasks = []

function renderTasks(){
  taskListEl.innerHTML=""
  listTasks.forEach((task, index) => {
    const taskContainer = document.createElement("div")
    taskContainer.className = "task"

    const inputsContainer = document.createElement("div")

    const buttonsContainer = document.createElement("div")

    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox"
    checkboxEl.addEventListener("click", () => {
      if(checkboxEl.checked){
        inputTask.style.textDecoration = "line-through"
      }else{
       inputTask.style.textDecoration = "none"
      }
    })

    const inputTask = document.createElement("input");
    inputTask.type = "text"
    inputTask.value = task
    inputTask.id = index
    inputTask.disabled = true

    const editButton = document.createElement("button")
    editButton.innerText = "🖊️"
    editButton.addEventListener("click", () => {
      if(inputTask.disabled){
        inputTask.disabled = false
        editButton.innerHTML = "✔"
        inputTask.focus()
      }else{
        editButton.innerHTML = "🖊️"
        listTasks[index] = inputTask.value
        inputTask.disabled = true
        renderTasks()
      }
    })

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "✖️"
    deleteButton.addEventListener("click", () => {
      listTasks.splice(index, 1)
      renderTasks()
    })

    inputsContainer.appendChild(checkboxEl)
    inputsContainer.appendChild(inputTask)
    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    taskContainer.appendChild(inputsContainer)
    taskContainer.appendChild(buttonsContainer)

    taskListEl.appendChild(taskContainer)
  })
}

buttonEL.addEventListener("click", () => {
  const task = inputEl.value
  if(task){
    listTasks.push(task)
    inputEl.value = ""
    renderTasks()
  }
})

