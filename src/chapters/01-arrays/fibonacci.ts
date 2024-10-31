export function getFibonacci() {
  const fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  fibonacci[2] = 1;

  for (let index = 3; index < 20; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
  }

  return fibonacci;
}
