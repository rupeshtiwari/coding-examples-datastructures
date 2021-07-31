/**
 * https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1/?category[]=Arrays&category[]=Arrays&difficulty[]=1&page=1&query=category[]Arraysdifficulty[]1page1category[]Arrays
 * Kadane's Algorithm
 */
class MaximumSubArraySum {
  /**
   * O(n) time | O(1) space
   * @param {number} array
   * @param {number} n
   * @returns
   */
  execute(array, n) {
    n = array.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;

    for (let i = 0; i < n; i++) {
      currentSum = Math.max(currentSum, 0) + array[i];
      maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
  }
}

describe("@Algorithms | Kadane's Algorithm", () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new MaximumSubArraySum().execute([1, 2, 3, -2, 5])).toEqual(9);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(new MaximumSubArraySum().execute([-1, -2, -3, -4])).toEqual(-1);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });

  it('Problem #3', () => {
    var start = performance.now();
    expect(
      new MaximumSubArraySum().execute([-2, -5, 6, -2, -3, 1, 5, -6])
    ).toEqual(7);
    var end = performance.now();
    console.log('Problem #3', end - start);
  });
});
