const fs = require('fs');

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book, null, 2);
// const bookParsed = JSON.parse(bookJSON);

// console.log('bookJSON', bookJSON);
// console.log('bookParsed', bookParsed);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json', 'utf-8');
// const data = JSON.parse(dataBuffer);

// console.log('data.author', data.author);

const origData = JSON.parse(fs.readFileSync('./1-json.json', 'utf-8'));
origData.name = 'Shealtiel Kim Nejudne';
origData.age = 30;
fs.writeFileSync('./1-json.json', JSON.stringify(origData));
