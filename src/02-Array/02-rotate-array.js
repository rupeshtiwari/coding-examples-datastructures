/**
 * https://practice.geeksforgeeks.org/problems/rotate-array-by-n-elements/0#
 * Rotate the array clockwise.
 * Difficulty: BASIC
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
 */
class Rotate {
  /**
   * O(n) time | O(d) space
   * @param {*} array
   * @param {*} d
   * @returns
   */
  execute1(array, d) {
    let temp = [];
    let n = array.length;
    for (let i = 0; i < d; i++) {
      temp[i] = array[i];
    }

    for (let i = 0; i < n - d; i++) {
      array[i] = array[d + i];
    }

    for (let i = 0; i < temp.length; i++) {
      array[n - d + i] = temp[i];
    }

    return array;
  }

  /**
   * Using Reverse and Swap Method you can rotate array
   * O(n) time | O(1) space
   * @param {*} array
   * @param {*} d
   * @returns
   */
  execute(array, d) {
    // 12345 rotate 2 times=> 34512
    let n = array.length;
    this.reverse(array, 0, d - 1);
    this.reverse(array, d, n - 1);
    this.reverse(array, 0, n - 1);

    return array;
  }

  reverse(array, high, low) {
    while (high <= low) {
      const temp = array[low];
      array[low] = array[high];
      array[high] = temp;
      high++;
      low--;
    }
  }
}
describe('@Arrays: Rotate an Array', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new Rotate().execute1([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(
      new Rotate().execute1([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3)
    ).toEqual([8, 10, 12, 14, 16, 18, 20, 2, 4, 6]);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });
});

describe('@Arrays: Rotate an Array Optimized', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new Rotate().execute([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(
      new Rotate().execute([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3)
    ).toEqual([8, 10, 12, 14, 16, 18, 20, 2, 4, 6]);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });
});
