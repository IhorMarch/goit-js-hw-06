


const itemEl = document.querySelectorAll('.item');
console.log("Number of categories:", itemEl.length);


itemEl.forEach(function (item) {
   return console.log("Category:", item.children[0].textContent,"Elements:",item.children[1].children.length);
});






















// ==============================================================
// const totalCategories = document.querySelectorAll(".item");
// console.log(`В списке ${totalCategories.length} категории.`);

// const categoriesArray = [...totalCategories]
// //   .map(
// //     categories => `Категория: ${categories.children[0].textContent}
// // Количество элементов: ${categories.children[1].children.length}`
// //   )
// //   .join("\n");
// // console.log(categoriesArray);


