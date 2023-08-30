const allHasTooltip = [...document.getElementsByClassName('has-tooltip')]
let tooltip = document.querySelector('.tooltip')

function setAttributes(tag, dictAttr) {
    Object.keys(dictAttr).forEach(el => {
        tag.setAttribute(el, dictAttr[el])
    })
}

function setElement(element) {
    const {x, y} = element.getBoundingClientRect()
    let div = document.createElement('div')
    setAttributes(div, {'class': 'tooltip tooltip_active', 'style': `left: ${Math.floor(x)}px; top: ${Math.floor(y) + 20}px`})
    div.textContent = element.title
    return element.insertAdjacentElement('afterend', div)
}

allHasTooltip.forEach(el => {
    let check = false
    let elementDel = NaN
    el.addEventListener('click', (event) => {
        event.preventDefault()
        if (check) {
            elementDel.remove()
            check = false
        } 
        else {
            elementDel = setElement(el)
            console.log(elementDel)
            check = true
        }
    })
})