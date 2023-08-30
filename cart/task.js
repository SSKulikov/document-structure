const productList = [...document.querySelectorAll('.product')]
const products = document.querySelector('.cart__products')

function setAttributes(tag, dictAttr) {
    Object.keys(dictAttr).forEach(el => {
        tag.setAttribute(el, dictAttr[el])
    })
}

function createElementBasket(id, src, quantity) {
    let divMain = document.createElement('div')
    setAttributes(divMain, {'class': 'cart__product', 'data-id': `${id}`})

    let img = document.createElement('img')
    setAttributes(img, {'class': 'cart__product-image', 'src': `${src}`})

    let divCount = document.createElement('div')
    setAttributes(divCount, {'class': 'cart__product-count'})
    divCount.textContent = quantity

    divMain.appendChild(img)
    divMain.appendChild(divCount)

    return divMain
}

productList.forEach(product => {
    product.addEventListener('click', (e) => {
        let quantity = e.target.closest('.product__quantity').querySelector('.product__quantity-value')
        if (e.target.classList.contains('product__quantity-control_inc')) {
            quantity.textContent++
        }
        else if (e.target.classList.contains('product__quantity-control_dec')) {
            if (quantity.textContent > 1) {
                quantity.textContent--
            }
        }
        else if (e.target.classList.contains('product__add')) {
            let img = product.querySelector('.product__image').src
            let id = product.getAttribute('data-id')
            let position = createElementBasket(id, img, quantity.textContent)

            if (![...products.children].some(el => el.getAttribute('data-id') == id)) {
                products.appendChild(position)
            }
            else {
                needProductInBasket = [...products.children].filter(el => el.getAttribute('data-id') == id)
                let currentQuantity = Number(needProductInBasket[0].querySelector('.cart__product-count').textContent)
                needProductInBasket[0].querySelector('.cart__product-count').textContent = currentQuantity + Number(quantity.textContent)
            }
        }
    })
})