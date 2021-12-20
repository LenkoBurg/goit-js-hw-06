const listWithClass = document.querySelectorAll('.item');
console.log('Number of categories:', listWithClass.length);
console.log('');

listWithClass.forEach(item => {
    const titleListWithClass = item.querySelector("h2");
    console.log('Category:', titleListWithClass.textContent);

    const itemsListWithClass = item.querySelectorAll("li");
    console.log('Elements:', itemsListWithClass.length);

    console.log('');
})
