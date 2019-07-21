// object property shorthand

const name = 'KIM';
const userAge = 30;

const user = {
  name,
  age: userAge,
  location: 'Somewhere!'
}

console.log(user);

// object destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 10
}

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;
// console.log('productLabel', productLabel);
// console.log('price', price);
// console.log('stock', stock);
// console.log('rating', rating);

const transaction = (type, { label, price, stock }) => {
  console.log('type', type);
  console.log('label', label);
  console.log('price', price);
  console.log('stock', stock);
}

transaction('order', product)