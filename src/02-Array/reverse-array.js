class ReverseAnArray {
  execute(array) {
    let low = 0;
    let high = array.length - 1;

    while (low < high) {
      const temp = array[high];
      array[high] = array[low];
      array[low] = temp;
      low++;
      high--;
    }

    return array;
  }
}

describe('Reverse an Array', () => {
  it('Problem #1', () => {
    var start = performance.now();
    expect(new ReverseAnArray().execute([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(
      new ReverseAnArray().execute([
        86, 77, 15, 93, 35, 86, 92, 49, 21, 62, 27, 90, 59, 63, 26, 40, 26, 72,
        36, 11, 68, 67, 29, 82, 30, 62, 23, 67, 35, 29, 2, 22, 58, 69, 67, 93,
        56, 11, 42, 29, 73, 21, 19, 84, 37, 98, 24, 15, 70, 13, 26, 91, 80, 56,
        73, 62, 70, 96, 81, 5, 25, 84, 27, 36, 5, 46, 29, 13, 57, 24, 95, 82,
        45, 14, 67, 34, 64, 43, 50, 87, 8, 76, 78, 88,
      ])
    ).toEqual([
      88, 78, 76, 8, 87, 50, 43, 64, 34, 67, 14, 45, 82, 95, 24, 57, 13, 29, 46,
      5, 36, 27, 84, 25, 5, 81, 96, 70, 62, 73, 56, 80, 91, 26, 13, 70, 15, 24,
      98, 37, 84, 19, 21, 73, 29, 42, 11, 56, 93, 67, 69, 58, 22, 2, 29, 35, 67,
      23, 62, 30, 82, 29, 67, 68, 11, 36, 72, 26, 40, 26, 63, 59, 90, 27, 62,
      21, 49, 92, 86, 35, 93, 15, 77, 86,
    ]);

    var end = performance.now();
    console.log('Problem #2', end - start);
  });
});
