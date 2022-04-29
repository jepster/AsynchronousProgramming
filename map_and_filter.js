const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

const filteredItemsCombined = items.filter(item => item > 5)
    .map(item => item + ' Nutzer');
console.log(filteredItemsCombined);

// const mappedItems = items.map(item => {
//     const itemWithUser = item + ' users';
//     return itemWithUser.replace('users', 'Nutzer');
// });
// console.log(mappedItems);
