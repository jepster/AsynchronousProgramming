const book1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Enders Game");
});

const book2 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, "Sorry, not available!");
});

const book3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10, "I will be the fastest one.");
});

const book4 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Sorry, not available!");
});

Promise.race([book1, book2, book3, book4])
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log("Error!", error));