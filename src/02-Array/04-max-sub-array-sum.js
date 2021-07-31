/**
 *
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
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.max(array[i], 0);
      max = Math.max(max, sum);
    }

    return sum;
  }
}
