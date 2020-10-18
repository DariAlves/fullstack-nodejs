const fs = require('fs');
const filename = 'index.js';

fs.readFile(filename, (err, fileData) => {
    if (err) return console.error(err);

    console.log(`${filename}: ${fileData.length}`)
})

