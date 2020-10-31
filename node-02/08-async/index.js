const fs = require('fs').promises

const filename = '08-async/index.js';

fs.readFile(filename)
    .then(data => console.log(`${filename}: ${data.length}`))
    .catch(err => console.error(err))

// Vs 

// const fs = require('fs')

// const filename = '08-async/index.js';

// fs.readFile(filename, (err, fileData) => {
//     if (err) return console.error(err)

//     console.log(`${filename}: ${fileData.length}`);
// })
