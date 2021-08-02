/**
 * Difficulty Lvel: easy
 * Problem Link: https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1
 * Definition:
 */
class ChocolateProblem {
  /**
   * O(n log(n)) time | O(1)
   * @param {number} array
   * @param {number} m
   * @returns
   */
  execute(array, m) {
    let n = array.length;
    array.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let i = 0;
    let j = m - 1;
    let diff = array[j] - array[i];
    while (j < n) {
      diff = array[j] - array[i];
      if (diff < min) {
        min = diff;
      }
      i++;
      j++;
    }

    return min;
  }
}

describe('@Arrays: Chocolate Problem', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(
      new ChocolateProblem().execute([3, 4, 1, 9, 56, 7, 9, 12], 5)
    ).toEqual(6);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(new ChocolateProblem().execute([7, 3, 2, 4, 9, 12, 56], 3)).toEqual(
      2
    );
    var end = performance.now();
    console.log('Problem #2', end - start);
  });

  it('Problem #3', () => {
    var start = performance.now();
    expect(new ChocolateProblem().execute([7, 5, 3, 2, 6], 3)).toEqual(2);
    var end = performance.now();
    console.log('Problem #3', end - start);
  });
});
