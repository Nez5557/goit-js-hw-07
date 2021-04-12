const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
 ];

    const listEl = document.querySelector('#ingredients');
    const items = ingredients.map(item => {
    const itemOfListEl = document.createElement('li');
    itemOfListEl.textContent = item;
    return itemOfListEl;
  });
  console.log(items);
  listEl.append(...items);