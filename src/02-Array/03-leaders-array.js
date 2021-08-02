/**
 * Difficulty: EASY
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */
class LeadersInArray {
  /**
   * O(n^2) time | O (1) space
   * @param {*} arr
   * @param {*} n
   * @returns
   */
  execute1(arr, n) {
    n = arr.length;
    const result = [];
    for (let i = 0; i < n - 1; i++) {
      let isLeader = true;

      for (let j = i + 1; j < n; j++) {
        if (arr[j] > arr[i]) {
          isLeader = false;

          break;
        }
      }
      if (isLeader) {
        result.push(arr[i]);
      }
    }
    result.push(arr[n - 1]);

    return result;
  }

  /**
   * O(n) time | O(1) space
   * @param {*} arr
   * @param {*} n
   */
  execute(arr, n) {
    n = arr.length;
    let max = arr[n - 1];
    let result = [max];
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] >= max) {
        max = arr[i];
        result.push(max);
      }
    }

    return result.reverse();
  }
}

describe('@Arrays: Leaders in an Array Brute Force', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new LeadersInArray().execute1([1, 2, 3, 4, 0])).toEqual([4, 0]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(new LeadersInArray().execute1([16, 17, 4, 3, 5, 2])).toEqual([
      17, 5, 2,
    ]);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });
});

describe('@Arrays: Leaders in an Array Optimized', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new LeadersInArray().execute([1, 2, 3, 4, 0])).toEqual([4, 0]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(new LeadersInArray().execute([16, 17, 4, 3, 5, 2])).toEqual([
      17, 5, 2,
    ]);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });
});
