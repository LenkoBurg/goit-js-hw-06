const arrCategory = document.querySelectorAll('#categories .item')


console.log('Number of categories:', arrCategory.length)

console.log(' ')

console.log('Category:', arrCategory[0].querySelector('h2').textContent)
console.log('Elements:', arrCategory[0].querySelectorAll('ul li').length)

console.log(' ')

console.log('Category:', arrCategory[1].querySelector('h2').textContent)
console.log('Elements:', arrCategory[1].querySelectorAll('ul li').length)

console.log(' ')

console.log('Category:', arrCategory[2].querySelector('h2').textContent)
console.log('Elements:', arrCategory[2].querySelectorAll('ul li').length)
