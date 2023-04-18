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

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 900) {
        header.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})

