// Buatlah deret bilangan Fibonacci
const fibonacci = (suku) => {
  let deret = [];
  deret[0] = 1;
  if (suku === 2) {
    deret[1] = 1;
  } else if (suku > 2) {
    deret[0] = 1;
    deret[1] = 1;
    for (let i = 2; i < suku; i++) {
      deret[i] = deret[i - 1] + deret[i - 2];
    }
  }
  return console.log(...deret);
};

fibonacci(11);
