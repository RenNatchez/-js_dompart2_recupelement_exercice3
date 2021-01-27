//--EX01--
let divContent = document.querySelector('#content')
console.log(divContent)

//--EX02--
let allDivContent = document.querySelectorAll('#content')
console.log(allDivContent)

//--EX03--
let listElements = document.querySelectorAll('#listElements')
console.log(listElements)

//--EX04--
let listElementsImportant = document.querySelectorAll('.important')
console.log(listElementsImportant)

//--EX05--
let tab = Array.from(listElementsImportant )
console.log(tab)
tab.forEach(e => {
    let monText = e.innerText
    console.log(monText.substr(0,monText.length-1)+monText.substr(-1)toUpperCase())
});

