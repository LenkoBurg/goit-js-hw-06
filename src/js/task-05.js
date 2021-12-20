const spanToChange = document.querySelector('#name-output')

document.querySelector('#name-input').addEventListener('input', (e) => {
    spanToChange.textContent = e.currentTarget.value
    if (spanToChange.textContent === '') 
        spanToChange.textContent = 'Anonymous!'
})
