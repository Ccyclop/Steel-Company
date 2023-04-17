const productsList = ['არმატურა', 'გლინულა', 'ზოლოვანა', 'კვადრატული მილი', 'მილი', 'მრგვალი რკინა', 'ორტესებრი კოჭი', 'შველერი', 'კუთხოვანა', 'სენდვიჩ პანელი', 'მასიური კვადრატი']
const productsSrc = productsList.map((o) => `./assets/Produkcia/${o}.jpg`)

const productsPlace = document.querySelector('.products')

const addProduct = (src, name) => {
    let tmp =  `<div class="product-card">
    <img  src="${src}" alt="">
    <div class="product-card-bck">
        <p class="text-white ge">${name}</p>
    </div>
    </div>`

    productsPlace.innerHTML += tmp
}

for(var i = 0; i < productsList.length; i++) {
    addProduct(productsSrc[i], productsList[i])
}


const productsTitle = document.querySelector('.products-title')
const catalogBtns = document.querySelectorAll('#catalog')

catalogBtns.forEach((o) => {
    o.addEventListener('click', () => {
        window.scrollTo(productsTitle.getClientRects()[0].x, productsTitle.getClientRects()[0].y)
    })
})

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 934) {
        header.style.backgroundColor = 'rgba(0,0,0,0.2)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})

