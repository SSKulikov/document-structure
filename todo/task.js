const removeTask = [...document.getElementsByClassName('task__remove')]
const tasksList = document.querySelector('.tasks__list')
const input = document.querySelector('.tasks__input')
const buttonAppendTask = document.querySelector('.tasks__add')

function setAttributes(tag, dictAttr) {
    Object.keys(dictAttr).forEach(el => {
        tag.setAttribute(el, dictAttr[el])
    })
}

function createTask() {
    let div = document.createElement('div')
    div.setAttribute('class', 'task')

    let div1 = document.createElement('div')
    div1.setAttribute('class', 'task__title')
    div1.textContent = input.value

    let a = document.createElement('a')
    setAttributes(a, {'href': '#', 'class': `task__remove`})
    a.textContent = "\u00D7"

    div.appendChild(div1)
    div.appendChild(a)

    return div
}

buttonAppendTask.addEventListener('click', (e) => {
    e.preventDefault()
    e.keyCode = 13
    if (input.value){
        div = createTask()
        tasksList.appendChild(div)
        input.value = ''
    }
})

tasksList.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove()
    }
})