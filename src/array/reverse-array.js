class ReverseAnArray {
  execute(array) {
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
      i++;
      j--;
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
});
