/**
 * RECOMMENDED IN COMPETETIVE PROGRAMMING
 * Constant Time solution
 */
class Fibonacci {
  /**
   * O(n) time | O(1) space
   */
  execute(num) {
    if (num === 0 || num === 1) return num;

    let previous0 = 0;
    let previous1 = 1;

    let result = 0;

    for (let idx = 2; idx <= num; idx++) {
      result = previous0 + previous1;
      previous0 = previous1;
      previous1 = result;
    }

    return result;
  }
}

describe('Fibonacci', () => {
  it('should work #1', () => {
    var start = performance.now();
    expect(new Fibonacci().execute(100)).toBe(354224848179262000000);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
  it('should work #2', () => {
    var start = performance.now();
    expect(new Fibonacci().execute(3)).toBe(2);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
  it('should work #3', () => {
    var start = performance.now();
    expect(new Fibonacci().execute(5)).toBe(5);
    var end = performance.now();
    console.log('Iterative', end - start);
  });
});
