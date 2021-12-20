function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlMenu = document.querySelector('#controls')
const boxContainer = document.querySelector('#boxes')
let contr = 30;


const getANumber = (e) => {
  return Number(e.currentTarget.value)
}

const divEl = document.createElement('div')
const createBoxes = (amount) => {
    for (let i = 0; i < amount.length; i++) {
    
  divEl.classList.add('item')
  divEl.style.background = getRandomHexColor()
  
  if (boxContainer.querySelectorAll('.item').length === 0) {
    divEl.style.height = `${30}px`
    divEl.style.width = `${30}px`
   boxContainer.append(divEl)
  } else {
    contr += 10 
      divEl.style.height = `${30}px`
    divEl.style.width = `${contr}px`
  boxContainer.append(divEl)
  }
  }
  }

controlMenu.querySelector('input').addEventListener('input', e => {
  return e.currentTarget.value
     
})



controlMenu.querySelector('button').addEventListener('click', e => {
  e.preventDefault()
  
createBoxes(Number(controlMenu.querySelector('input').value))


  // const divEl = document.createElement('div')
  // divEl.classList.add('item')
  // divEl.style.background = getRandomHexColor()
  
  // if (boxContainer.querySelectorAll('.item').length === 0) {
  //   divEl.style.height = `${30}px`
  //   divEl.style.width = `${30}px`
  //   boxContainer.append(divEl)
  // } else {
  //   contr += 10 
  //     divEl.style.height = `${30}px`
  //   divEl.style.width = `${contr}px`
  //   boxContainer.append(divEl)
  // }
  
  
})



