export default function randomIntFromInterval(min: number, max: number) {
  /**
   * Returns a random number between min and max included
   */
  return Math.floor(Math.random() * (max - min + 1) + min);
}
