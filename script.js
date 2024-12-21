let buttonDeleteAll = document.querySelector('.deleteAll')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')
let list = document.querySelector('.list')
let PointX = document.querySelectorAll('.point__button')   // крестик
let check = document.querySelectorAll('.point__checkbox')
let buttonDeleteMarkedItems = document.querySelector('.btn1')

let addPointButton = document.querySelector('form')   //кнопка 'добавить'
let inputText = document.querySelector('.input')  //ввод текста

main.innerHTML = ``



let checkPoints = () => {
    if(main.hasChildNodes()){
        
        console.log('yes');
        
    } else{
        console.log('no');
        main.classList.remove('main__script')
        footer.classList.remove('footer__script')
    }
}

let watch = ''
let addPoint = (event) => {
    event.preventDefault()
    let addStyle = (el) => {
        el.classList.toggle('point__text_decoration')
        console.log('yes');
    }
    

    let deletePoint = () => {
        div.remove()
        checkPoints()
    }

    let deleteMarkedItems = () => {
        for(el of text){
            if(el.classList[1] === 'point__text_decoration'){
                deletePoint()
            }
        }
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

    main.appendChild(div)
    let txt = inputText.value
    inputText.value = ''

    // check = document.querySelector('.point__checkbox')
    let text = document.querySelectorAll('.point__text')

    div.querySelector(".point__button").addEventListener('click', () => {console.log(txt); deletePoint()} )
    div.querySelector(".point__checkbox").addEventListener('click', () => {
        for(el of text){
            addStyle(el)
        }
    })
    buttonDeleteMarkedItems.addEventListener('click', () => deleteMarkedItems())
}



let deleteAll = () => {
    footer.classList.remove('footer__script')
    main.innerHTML = ``
    main.classList.remove('main__script')
    watch = ''
}






buttonDeleteAll.addEventListener('click', () => deleteAll())
addPointButton.addEventListener('submit', () => addPoint(event))

buttonDeleteMarkedItems.addEventListener('click', () => deleteMarkedItems())

for(el of PointX){
    el.addEventListener('click', () => deletePoint())
}

for(el of check){
    el.addEventListener('click', () => addStyle())
}
