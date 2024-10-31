export function getFibonacciSequence(sequenceQuantity: number) {
  const fibonacci = [0, 1];

  for (let index = 2; index < sequenceQuantity; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
  }

  return fibonacci;
}
