// setTimeout(() => {
//   console.log('two seconds are up');
// }, 2000);

// const names = ['kim', 'nejudne', 'gwapo'];
// const shortNames = names.filter(name => name.length <= 5);
// console.log(shortNames);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       lon: 0,
//     };
//     callback(data);
//   }, 500);
// };

// geocode('adafdsasf', (res) => {
//   console.log(res)
// })

const add = (a, b, callback) => {
  setTimeout(() => {
    const data = a + b;
    callback(data);
  }, 500);
};

let x;

add(2, 2, res => {
  x = res;
  console.log(x);
});