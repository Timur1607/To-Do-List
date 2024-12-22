let buttonDeleteAll = document.querySelector('.deleteAll')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')
let list = document.querySelector('.list')
let PointX = document.querySelectorAll('.point__button')   // крестик
let check = document.querySelectorAll('.point__checkbox')
let buttonDeleteMarkedItems = document.querySelector('.btn1')

let addPointButton = document.querySelector('form')   //кнопка 'добавить'
let inputText = document.querySelector('.input')  //ввод текста

let localStorage = window.localStorage

main.innerHTML = ``

let arr = []


localStorage.toDoList



let checkPoints = () => {
    if(main.hasChildNodes()){
        
        console.log('yes');
        
    } else{
        console.log('no');
        main.classList.remove('main__script')
        footer.classList.remove('footer__script')
        localStorage.clear()
    }
}

let watch = ''
let addPoint = (event) => {
    
    event.preventDefault()
    
    // if(a.length === )
    
    
    let addStyle = (el) => {
        el.classList.toggle('point__text_decoration')
    }

    let deletePoint = () => {
        div.remove()
        checkPoints()
    }
  

    main.classList.add('main__script')
    footer.classList.add('footer__script')
    
    
    let div = document.createElement('div')
    div.classList.add('point')
    div.innerHTML = `
        <div class="point__forLeft">
            <input type="checkbox" class="point__checkbox" >
            <p class="point__text">${inputText.value}</p>
        </div>
        <input type="button" value="❌" class="point__button">
    `

    let checkbox = div.querySelector('.point__checkbox')

    main.appendChild(div)
    let txt = inputText.value
    inputText.value = ''

    
    
    localStorage.setItem("toDoList", arr)
    console.log(localStorage.toDoList.length)
    arr.push(txt)
    // check = document.querySelector('.point__checkbox')
    let text = div.querySelector('.point__text')

    div.querySelector(".point__button").addEventListener('click', () => {console.log(txt); deletePoint()} )
    checkbox.addEventListener('click', () => addStyle(text))
    buttonDeleteMarkedItems.addEventListener('click', () => deleteMarkedItems())
}

let addPointlocal = () => {
    
    // event.preventDefault()
    
    // if(a.length === )
    
    
    let addStyle = (el) => {
        el.classList.toggle('point__text_decoration')
    }

    let deletePoint = () => {
        div.remove()
        checkPoints()
    }
  

    main.classList.add('main__script')
    footer.classList.add('footer__script')
    
    
    let div = document.createElement('div')
    div.classList.add('point')
    div.innerHTML = `
        <div class="point__forLeft">
            <input type="checkbox" class="point__checkbox" >
            <p class="point__text">${inputText.value}</p>
        </div>
        <input type="button" value="❌" class="point__button">
    `

    let checkbox = div.querySelector('.point__checkbox')

    main.appendChild(div)
    let txt = inputText.value
    inputText.value = ''

    
    
    localStorage.setItem("toDoList", arr)
    console.log(localStorage.toDoList.length)
    arr.push(txt)
    // check = document.querySelector('.point__checkbox')
    let text = div.querySelector('.point__text')

    div.querySelector(".point__button").addEventListener('click', () => {console.log(txt); deletePoint()} )
    checkbox.addEventListener('click', () => addStyle(text))
    buttonDeleteMarkedItems.addEventListener('click', () => deleteMarkedItems())
}


let deleteMarkedItems = () => {
    let text = document.querySelectorAll('.point__text')
    for(el of text){
        if(el.classList[1] === 'point__text_decoration'){
            // deletePoint()
            el.parentElement.parentElement.remove()
            checkPoints()
        }
    }
}



let deleteAll = () => {
    footer.classList.remove('footer__script')
    main.innerHTML = ``
    main.classList.remove('main__script')
    watch = ''
    localStorage.clear()
    arr = []
}






buttonDeleteAll.addEventListener('click', () => deleteAll())
addPointButton.addEventListener('submit', () => {
    addPoint(event)
    localStorage.setItem("toDoList", arr)
})

buttonDeleteMarkedItems.addEventListener('click', () => deleteMarkedItems())

for(el of PointX){
    el.addEventListener('click', () => deletePoint())
}

for(let i = 0; i < localStorage.toDoList.length; i++){
    addPointlocal()
    console.log('yes');
}
//КОРОЧЕ НУЖНО СДЕЛАТЬ ТАК ЧТОБЫ МАССИВ ПОСЛЕ ПЕРЕЗАГРУЗКИ НЕ ОПУСТОШАЛСЯ, И ВРОДЕ ВСЕ БУДЕТ НОРМ
