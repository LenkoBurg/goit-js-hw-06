function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlMenu = document.querySelector('#controls')
const boxContainer = document.querySelector('#boxes')
let contr = 30;



const createBoxes = (amount) => {
  const arrDiv = [];
  let currentPx = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div')
    divEl.classList.add('item')
    divEl.style.backgroundColor = getRandomHexColor()
    if (arrDiv.length === 0) {
      divEl.style.height = `${30}px`
      divEl.style.width = `${30}px`
      arrDiv.push(divEl)
    } else {
      currentPx += 10
      divEl.style.height = `${30}px`
      divEl.style.width = `${currentPx}px`
      arrDiv.push(divEl)
    }
  }
  
  boxContainer.append(...arrDiv)
  
  }


controlMenu.querySelector('button').addEventListener('click', e => {
  const numb = Number(controlMenu.querySelector('input').value)
  createBoxes(numb)
})
  
controlMenu.querySelector('button[data-destroy]').addEventListener('click', e => {
  const item = boxContainer.querySelectorAll('.item')
  for (let i of item) {
      i.remove()
    }
  
})



  
  




