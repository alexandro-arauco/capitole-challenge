export function getRandomElements<T>(array: T[], count: number = 3): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
