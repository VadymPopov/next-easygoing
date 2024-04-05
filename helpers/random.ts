export function getRandomNumber(total: number): number {
  const numbers = Array.from({ length: total }, (_, index) => index + 1);

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // Return and remove the last element of the shuffled array
  return numbers.pop()!;
}
