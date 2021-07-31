/**
 * EASY
 * https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1
 * Majority Element which occurs more than n/2 times.
 *
 */
class MajorityElement {


  /**
   * O(n) time | O(1) space
   * @param {*} array 
   * @param {*} n 
   * @returns 
   */  
  executeWith_MooresVotingAlgorithm(array, n) {
    n = array.length;
    let candidate = findCandidate();

    return isMajority(candidate) ? candidate : -1;

    function findCandidate() {
      let current = null;
      let freq = 0;
      for (let i = 0; i < n; i++) {
        if (current == null) current = array[i];
        if (array[i] === current) {
          freq++;
        } else {
          freq--;
        }

        if (freq === 0) current = null;
      }

      return current;
    }

    function isMajority(candiate) {
      let count = 0;
      for (let i = 0; i < n; i++) {
        if (array[i] === candiate) count++;
      }

      return count > Math.floor(n / 2);
    }
  }

  /**
   * O(n) time | O(n) space
   */
  execute(array, n) {
    n = array.length;
    const threshold = Math.floor(n / 2);
    const freq = {};

    for (let i = 0; i < n; i++) {
      if (freq[array[i]] == null) {
        freq[array[i]] = 1;
      } else {
        freq[array[i]]++;
      }
    }

    for (let [key, value] of Object.entries(freq)) {
      if (value > threshold) {
        return +key;
      }
    }

    return -1;
  }
}

describe('Majority Element in Array', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new MajorityElement().execute([1, 2, 4, 2, 3, 2, 2])).toEqual(2);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(new MajorityElement().execute([1, 2, 3])).toEqual(-1);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });

  it('Problem #3', () => {
    var start = performance.now();
    expect(new MajorityElement().execute([3, 1, 3, 3, 2])).toEqual(3);
    var end = performance.now();
    console.log('Problem #3', end - start);
  });
});

describe(`@Algorithms | MOORE's Voting Algorithm: Majority Element in Array`, () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(
      new MajorityElement().executeWith_MooresVotingAlgorithm([
        1, 2, 4, 2, 3, 2, 2,
      ])
    ).toEqual(2);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(
      new MajorityElement().executeWith_MooresVotingAlgorithm([1, 2, 3])
    ).toEqual(-1);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });

  it('Problem #3', () => {
    var start = performance.now();
    expect(
      new MajorityElement().executeWith_MooresVotingAlgorithm([3, 1, 3, 3, 2])
    ).toEqual(3);
    var end = performance.now();
    console.log('Problem #3', end - start);
  });
});
