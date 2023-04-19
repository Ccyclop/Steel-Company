const productsList = ['არმატურა', 'გლინულა', 'ზოლოვანა', 'კვადრატული მილი', 'მილი', 'მრგვალი რკინა', 'ორტესებრი კოჭი', 'შველერი', 'კუთხოვანა', 'სენდვიჩ პანელი', 'მასიური კვადრატი', 'ფურცლოვანა ფოლადი']
const productsSrc = productsList.map((o) => `./assets/Produkcia/${o}.jpg`)

window.addEventListener('load', () => {
    if(window.location.href.includes('gallery.html')){
        localStorage['page'] = 'gallery'
    } else {
        localStorage['page'] = 'index'
        if(localStorage['scrollTo'] != null && localStorage['scrollTo'] != 'null') {
            window.location.href += localStorage['scrollTo']
            localStorage['scrollTo'] = null
        }
    }
    if(localStorage['page'] == 'gallery'){
        const catalogLink = document.querySelector('#catalog')
        const contactLink = document.querySelector('#contactLink')

        catalogLink.addEventListener('click', () => {
            localStorage['scrollTo'] = '#catalogTitle'
            window.location.href = window.location.href.replace('gallery', 'index')
        })

        contactLink.addEventListener('click', () => {
            localStorage['scrollTo'] = '#contact'
            window.location.href = window.location.href.replace('gallery', 'index')
        })

        catalogLink.removeEventListener('click', () => {
            localStorage['scrollTo'] = '#catalogTitle'
            window.location.href = window.location.href.replace('gallery', 'index')
        })
        contactLink.removeEventListener('click', () => {
            localStorage['scrollTo'] = '#contact'
            window.location.href = window.location.href.replace('gallery', 'index')
        })
    }
})

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
    try {
        addProduct(productsSrc[i], productsList[i])
    } catch {TypeError}
}

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.innerWidth > 630 && localStorage['page'] == 'index') {
        if(window.scrollY >= 900) {
            header.style.backgroundColor = 'rgba(0,0,0,0.5)'
        } else {
            header.style.backgroundColor = 'transparent'
        }
    }
})

