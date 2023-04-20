const productsList = ['არმატურა', 'გლინულა', 'ზოლოვანა', 'კვადრატული მილი', 'მილი', 'მრგვალი რკინა', 'ორტესებრი კოჭი', 'შველერი', 'კუთხოვანა', 'სენდვიჩ პანელი', 'მასიური კვადრატი', 'ფურცლოვანა ფოლადი']
const productsSrc = productsList.map((o) => `./assets/Produkcia/${o}.jpg`)
const productsEnList = ['Armature', 'Rolled Steel', 'Flat Steel', 'Square Mile', 'Pipe', 'Round Iron', 'H-beam', 'Channel Iron', 'Angle', 'Sandwich Panel', 'Massive Square', 'Sheet Steel']
const productsRuList = ['Арматура', 'Катанка', 'полосовая Сталь', 'Квадратная Миля', 'Трубка', 'Круглое Железо', 'Двутавровая Балка', 'Швеллер', 'Угловое Железо', 'Сэндвич Панель', 'Массивная Площадь', 'Листовая Сталь']

const productsPlace = document.querySelector('.products')

const addProduct = (src, name, enName, ruName) => {
    let tmp =  `<div class="product-card">
    <img  src="${src}" alt="">
    <div class="product-card-bck">
        <p class="text-white ge">${name}</p>
        <p class="text-white en" style='display: none;'>${enName}</p>
        <p class="text-white ru" style='display: none;'>${ruName}</p>
    </div>
    </div>`

    productsPlace.innerHTML += tmp
}

for(var i = 0; i < productsList.length; i++) {
    try {
        addProduct(productsSrc[i], productsList[i], productsEnList[i], productsRuList[i])
    } catch {TypeError}
}


const geElements = document.querySelectorAll('.ge')
const enElements = document.querySelectorAll('.en')
const ruElements = document.querySelectorAll('.ru')

const langGeBtn = document.querySelector('#langGe')
const langEnBtn = document.querySelector('#langEn')
const langRuBtn = document.querySelector('#langRu')

var blockGeElements, blockEnElements, blockRuElements, flexGeElements, tableGeElements, flexEnElements, tableEnElements, flexRuElements, tableRuElements;
blockGeElements = []
 blockEnElements = []
 blockRuElements = []
 flexGeElements = []
 flexEnElements = []
 flexRuElements = []
 tableGeElements = []
 tableEnElements = []
 tableRuElements = []

const translateToGe = () => {
    geElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexGeElements.includes(o)){
            flexGeElements.push(o)
            return
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableGeElements.includes(o)) {
            tableGeElements.push(o)
            return
        } else if(window.getComputedStyle(o).display == 'block' && !blockGeElements.includes(o)) {
            blockGeElements.push(o)
            return
        }
        if(flexGeElements.includes(o)){
            o.style.display = 'flex'
        } else if(tableGeElements.includes(o)){
            o.style.display = 'table-cell'
        } else if(blockGeElements.includes(o)){
            o.style.display = 'block'
        } else {
            o.style.display = 'inline-block';
        }
    })

    enElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexEnElements.includes(o)){
            flexEnElements.push(o)
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableEnElements.includes(o)) {
            tableEnElements.push(o)
        } else if(window.getComputedStyle(o).display == 'block' && !blockEnElements.includes(o)) {
            blockEnElements.push(o)
        }
        o.style.display = 'none';
    })

    ruElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexRuElements.includes(o)){
            flexRuElements.push(o)
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableRuElements.includes(o)) {
            tableRuElements.push(o)
        } else if(window.getComputedStyle(o).display == 'block' && !blockRuElements.includes(o)) {
            blockRuElements.push(o)
        }
        o.style.display = 'none'
    })
}

const translateToEn = () => {
    geElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexGeElements.includes(o)){
            flexGeElements.push(o)
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableGeElements.includes(o)) {
            tableGeElements.push(o)
        } else if(window.getComputedStyle(o).display == 'block' && !blockGeElements.includes(o)) {
            blockGeElements.push(o)
        }
        o.style.display = 'none';
    })
    enElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexEnElements.includes(o)){
            flexEnElements.push(o)
            return
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableEnElements.includes(o)) {
            tableEnElements.push(o)
            return
        } else if(window.getComputedStyle(o).display == 'block' && !blockEnElements.includes(o)) {
            blockEnElements.push(o)
            return
        }
        if(flexEnElements.includes(o)){
            o.style.display = 'flex'
        } else if(tableEnElements.includes(o)){
            o.style.display = 'table-cell'
        } else if(blockEnElements.includes(o)){
            o.style.display = 'block'
        } else {
            o.style.display = 'inline-block';
        }
    })
    ruElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexRuElements.includes(o)){
            flexRuElements.push(o)
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableRuElements.includes(o)) {
            tableRuElements.push(o)
        } else if(window.getComputedStyle(o).display == 'block' && !blockRuElements.includes(o)) {
            blockRuElements.push(o)
        }
        o.style.display = 'none'
    })
}

const translateToRu = () => {
    geElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexGeElements.includes(o)){
            flexGeElements.push(o)
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableGeElements.includes(o)) {
            tableGeElements.push(o)
        } else if(window.getComputedStyle(o).display == 'block' && !blockGeElements.includes(o)) {
            blockGeElements.push(o)
        }
        o.style.display = 'none';
    })
    enElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexEnElements.includes(o)){
            flexEnElements.push(o)
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableEnElements.includes(o)) {
            tableEnElements.push(o)
        } else if(window.getComputedStyle(o).display == 'block' && !blockEnElements.includes(o)) {
            blockEnElements.push(o)
        }
        o.style.display = 'none';
    })
    ruElements.forEach(o => {
        if(window.getComputedStyle(o).display == 'flex' && !flexRuElements.includes(o)){
            flexRuElements.push(o)
            return
        } else if(window.getComputedStyle(o).display == 'table-cell' && !tableRuElements.includes(o)) {
            tableRuElements.push(o)
            return
        } else if(window.getComputedStyle(o).display == 'block' && !blockRuElements.includes(o)) {
            blockRuElements.push(o)
            return
        }
        if(flexRuElements.includes(o)){
            o.style.display = 'flex'
        } else if(tableRuElements.includes(o)){
            o.style.display = 'table-cell'
        } else if(blockRuElements.includes(o)){
            o.style.display = 'block'
        } else {
            o.style.display = 'inline-block';
        }
    })
}

langGeBtn.addEventListener('click', () => {
    localStorage['language'] = 'GE'
    translateToGe()
    if(!langGeBtn.classList.contains('active')){
        langGeBtn.classList.add('active')
        langEnBtn.classList.remove('active')
        langRuBtn.classList.remove('active')
    }
})

langEnBtn.addEventListener('click', () => {
    localStorage['language'] = 'EN'
    translateToEn()
    if(!langEnBtn.classList.contains('active')){
        langEnBtn.classList.add('active')
        langGeBtn.classList.remove('active')
        langRuBtn.classList.remove('active')
    }
})

langRuBtn.addEventListener('click', () => {
    localStorage['language'] = 'RU'
    translateToRu()
    if(!langRuBtn.classList.contains('active')){
        langRuBtn.classList.add('active')
        langGeBtn.classList.remove('active')
        langEnBtn.classList.remove('active')
    }
})


if(localStorage['language'] == null || localStorage['language'] == 'GE'){
    translateToGe()
    if(!langGeBtn.classList.contains('active')){
        langGeBtn.classList.add('active')
        langEnBtn.classList.remove('active')
        langRuBtn.classList.remove('active')
    }
} else if (localStorage['language'] == 'EN') {
    translateToEn()
    if(!langEnBtn.classList.contains('active')){
        langEnBtn.classList.add('active')
        langGeBtn.classList.remove('active')
        langRuBtn.classList.remove('active')
    }
} else if(localStorage['language'] == 'RU') {
    translateToRu()
    if(!langRuBtn.classList.contains('active')){
        langRuBtn.classList.add('active')
        langGeBtn.classList.remove('active')
        langEnBtn.classList.remove('active')
    }
}

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

