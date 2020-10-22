const seconds = [9, 5, 2, 3];

seconds.forEach(s => {
    setTimeout(() => console.log(`$Waited ${s} seconds`), 1000 * s)
})

console.log('done');