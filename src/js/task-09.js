function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


document.querySelector('.change-color').addEventListener('click', e => {
  const color = getRandomHexColor();
  document.querySelector('.color').textContent = color
  document.querySelector('body').style.background = color
})