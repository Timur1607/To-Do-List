let buttonDeleteAll = document.querySelector('.deleteAll')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')
let list = document.querySelector('.list')
let PointX = document.querySelectorAll('.point__button')   // крестик
let check = document.querySelectorAll('#point__checkbox') 
let text = document.querySelectorAll('.point__text')

let addPointButton = document.querySelector('.submit')   //кнопка 'добавить'
let inputText = document.querySelector('.input')  //ввод текста

main.innerHTML = ``

// footer.remove()
// main.remove()


let checkPoints = () => {
    if(main.hasChildNodes()){
        
        console.log('yes');
        
    } else{
        console.log('no');
        main.classList.remove('main__script')
        footer.classList.remove('footer__script')
    }
}


let addPoint = () => {
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
            <label for="point__checkbox">
            <input type="checkbox" id="point__checkbox">
            </label>
            
            <p class="point__text">${inputText.value}</p>
        </div>
        <input type="button" value="❌" class="point__button">
    `
    main.appendChild(div)
    let txt = inputText.value
    inputText.value = ''
    
    div.querySelector(".point__button").addEventListener('click', () => {console.log(txt); deletePoint()} )
            //ТУТ АКТИВИРОВАТЬ ФУНКЦИЮ DELETEPOINT В КОТОРОЙ ДОЛЖЕН ПОЯВЛЯТСЯ ДИВ 
}



let addStyle = () => {
    for(el of text){
        if(check.checked){
            el.classList.add('pointStyle')
            console.log('yes');
        }
    }
    
    
    // if(check.checked === 'true'){
    //     console.log('true');
    // } else{

    // }
}


let deleteAll = () => {
    footer.classList.remove('footer__script')
    main.innerHTML = ``
    main.classList.remove('main__script')
}




buttonDeleteAll.addEventListener('click', () => deleteAll())
addPointButton.addEventListener('click', () => addPoint())

for(el of check){
    el.addEventListener('change', () => addStyle())
}

for(el of PointX){
    el.addEventListener('click', () => deletePoint())
}
