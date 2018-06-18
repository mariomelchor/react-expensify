// // Object Destructuring
// const person = {
//   name: 'Mario Melchor',
//   age: 33,
//   location: {
//     city: "Santa Ana",
//     temp: 85,
//   }
// }

// const { age, name } = person;

// console.log( `${name} is ${age} `);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan",
//   publisher: {
//     // name: 'Peguins'
//   }
// }

// const { name: publisherName = 'Self-Pubished' } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = [ '123 W Orangewood', 'Anaheim', 'Ca', '92802'];

const [ street, city, state, zip ] = address;

console.log( `You are in ${street} ${zip}"`);

const item = [ 'Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [ name, small, medium, large ] = item;

console.log(`A ${name} cost ${medium}`)