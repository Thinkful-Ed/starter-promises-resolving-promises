const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will the weather be nice today?";
const promise = tell(question);

promise
  .then((fortune) => {
    console.log(question);
    console.log(fortune);
  })
  .catch(console.log);

welcome()
  .then(console.log)
  .then(() => {
    goodbye().then(console.log);
  });

/*
promise.then((result) => {
  console.log(result);
});
//promise.then(console.log);


const promise = welcome();

console.log(promise);
*/
