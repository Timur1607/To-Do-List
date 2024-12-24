let buttonDeleteAll = document.querySelector('.deleteAll')
let main = document.querySelector('.main')
let footer = document.querySelector('.footer')
let list = document.querySelector('.list')
let PointX = document.querySelectorAll('.point__button')   // крестик
let check = document.querySelectorAll('.point__checkbox')
let buttonDeleteMarkedItems = document.querySelector('.btn1')

let sendFormButton = document.querySelector('form')   //кнопка 'добавить'
let inputText = document.querySelector('.input')  //ввод текста

let localStorage = window.localStorage

main.innerHTML = ``

let arr = [

]

let object = {  

}




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
let sendForm = (event) => {
    event.preventDefault()
    let txt = inputText.value
    arr.push({'input': txt, 'checkbox': false, 'deletePoint': false})
    addPoint(arr[arr.length-1])

    
    inputText.value = ''
    console.log(arr);

    localStorage.setItem("toDoList", JSON.stringify(object))   
}

let addPoint = (object) => {
    let addStyle = (el) => {
        el.classList.toggle('point__text_decoration')
        object.checkbox = !object.checkbox
        localStorage.setItem("toDoList", JSON.stringify(arr)) 
        console.log(arr);
    }

    let deletePoint = () => {
        div.remove()
        checkPoints()
        // localStorage.setItem('toDoList', object.deletePoint = true )
        object.deletePoint = true
        console.log(arr);
    }



    main.classList.add('main__script')
    footer.classList.add('footer__script')
    
    
    let div = document.createElement('div')
    div.classList.add('point')
    div.innerHTML = `
        <div class="point__forLeft">
            <input type="checkbox" class="point__checkbox" ${object.checkbox ? 'checked' : ''}>
            <p class="point__text ${object.checkbox ? 'point__text_decoration' : ''}">${object.input}</p>
        </div>
        <input type="button" value="❌" class="point__button">
    `

    let checkbox = div.querySelector('.point__checkbox')

    main.appendChild(div)

    let text = div.querySelector('.point__text')



    div.querySelector(".point__button").addEventListener('click', () => { deletePoint()} )
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
    object = {}                          /////////////////////////////////////////////////////////
}


buttonDeleteAll.addEventListener('click', () => deleteAll())
sendFormButton.addEventListener('submit', () => {
    sendForm(event)
    localStorage.setItem("toDoList", JSON.stringify(arr))          ////////////////////////////////////////////////////////  
})

buttonDeleteMarkedItems.addEventListener('click', () => deleteMarkedItems())

for(el of PointX){
    el.addEventListener('click', () => deletePoint())
}



if(localStorage.getItem('toDoList') !== null){
    arr = JSON.parse(localStorage.toDoList);
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].deletePoint);
        
        // if(arr[i].deletePoint === true){
        //     delete arr[i]
        //     console.log('удалил');
            
        // }
    }
    
    for(let i = 0; i < arr.length; i++){
        addPoint(arr[i])
    }
}
// console.log(localStorage.getItem('toDoList'));






