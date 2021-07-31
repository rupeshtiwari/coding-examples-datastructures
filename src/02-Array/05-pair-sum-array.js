/**
 * EASY
 *
 * Given Sorted Array. Find pair of numbers sum is x.
 *
 */
class PairSumProblem {
  /**
   * O(n) time | O(1) space
   * @param {number} array
   * @param {number} n
   * @returns
   */
  execute(array, n, x) {
    n = array.length;
    let high = n - 1;
    let low = 0;
    let sum = 0;
    const result = [];

    while (low <= high) {
      sum = array[low] + array[high];
      if (sum === x) {
        result.push(array[low], array[high]);
        high--;
        low++;
      } else if (sum > x) {
        high--;
      } else {
        low++;
      }
    }

    return result;
  }
}

describe('Key Pair | Pair Sum Problem', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(
      new PairSumProblem().execute([1, 3, 5, 7, 10, 12, 14], 7, 13)
    ).toEqual([1, 12, 3, 10]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });
});
