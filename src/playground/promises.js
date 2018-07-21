const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Mario Melchor',
    //   age: 33
    // })
    reject('Something went wrong!')
  }, 1500)
  
 
  // resolve('this is my other resolved data');

});

console.log('before')

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
