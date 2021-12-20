let counterZero = 0;
const valueNunber = document.querySelector('#value')
 

document.querySelector('button[data-action="decrement"]').addEventListener('click', (e) => {
    counterZero -= 1
    valueNunber.textContent = counterZero
})

document.querySelector('button[data-action="increment"]').addEventListener('click', (e) => {
    counterZero += 1
    valueNunber.textContent = counterZero
})

