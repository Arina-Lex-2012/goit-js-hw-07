const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const elements = []; 

const ingredientsEl = document.getElementById('ingredients');  

for (let i = 0; i < ingredients.length; i+=1) {
    const listEl = document.createElement('li'); 
    listEl.textContent = ingredients[i];

    elements.push(listEl);
 };

 ingredientsEl.append(...elements);