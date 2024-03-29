/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const items = document.querySelectorAll(".item");
//     Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title}.
//     Количество элементов: ${itemsLength}`);
//     })
  
// или:

//   const listCategoriesEl = document.querySelector('#categories');
// console.log(`В списке ${listCategoriesEl.children.length} категории.`)
// const listItemsEl = document.querySelectorAll('.item');
// const countElements = list => {
//     return list.forEach(item => {
//       console.log(`Категория: ${item.firstElementChild.textContent}`);
//       console.log(` Количество элементов: ${item.querySelectorAll('li').length}`,);
//     });
//   };
//   countElements(listItemsEl);

// или:

  const totalCategories = document.querySelectorAll(".item");
  console.log(`В списке ${totalCategories.length} категории.`);

  const categoriesArray = [...totalCategories]
  .map(categories => `Категория: ${categories.children[0].textContent}
  Количество элементов: ${categories.children[1].children.length}`)
  .join("\n");
  console.log(categoriesArray);