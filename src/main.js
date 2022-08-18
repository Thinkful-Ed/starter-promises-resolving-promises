const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "should I wear sunscreen today?";

welcome()
    .catch((error) => console.error(error))
    .then(console.log)
    .then(goodbye)
    .then(console.log);

tell(question)
  .catch((error) => console.error(`Reference Error: ${error}`))
  .then((fortune) => {
    console.log(`Your question: \"${question}\"`);
    console.log(`Our answer: ${fortune}`);
  });
