const countItems = document.getElementById('categories').children;
console.log(`В списке ${countItems.length} категории.`);

const titleCategory = document.querySelectorAll('li.item');

titleCategory.forEach(element => {
    console.log(' ');
    console.log(`Категория: ${element.querySelector('h2').textContent}`);    
    console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);    
});
