/**
 * Difficulty Lvel:Medium
 * Problem Link: https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1
 * Definition:
 */
class RainWaterHarvesting {
  /**
   * O(n) time | O(n) space
   * @param {number} array
   * @param {number} n
   * @returns number
   */
  execute(array, n) {
    n = array.length;
    let leftLargest = [];
    let leftLargestSoFar = Number.MIN_SAFE_INTEGER;

    let rightLargest = [];
    let rightLargestSoFar = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
      leftLargestSoFar = Math.max(leftLargestSoFar, array[i]);
      leftLargest[i] = leftLargestSoFar;
    }

    for (let i = n - 1; i >= 0; i--) {
      rightLargestSoFar = Math.max(rightLargestSoFar, array[i]);
      rightLargest[i] = rightLargestSoFar;
    }

    let stock = 0;

    for (let i = 0; i < n; i++) {
      stock += Math.min(leftLargest[i], rightLargest[i]) - array[i];
    }

    return stock;
  }
}

describe('Rain Water Harvesting', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new RainWaterHarvesting().execute([3, 0, 0, 2, 0, 4])).toEqual(10);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(new RainWaterHarvesting().execute([7, 4, 0, 9])).toEqual(10);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });

  it('Problem #3', () => {
    var start = performance.now();
    expect(new RainWaterHarvesting().execute([6, 9, 9])).toEqual(0);
    var end = performance.now();
    console.log('Problem #3', end - start);
  });
});
