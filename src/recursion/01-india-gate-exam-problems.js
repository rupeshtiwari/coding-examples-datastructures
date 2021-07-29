class GateExam {
  static d = 1;
  static result = [];

  question1(n) {
    GateExam.result.push(n, GateExam.d);
    GateExam.d++;
    if (n > 1) this.question1(n - 1);
    GateExam.result.push(GateExam.d);

    return GateExam.result;
  }

  question2Result = [];
  /**
   * How many times method is called?
   * @param {*} n
   * @returns
   */
  question2(n) {
    this.question2Result.push(n);
    if (n < 1) return n;
    this.question2(n - 1);
    this.question2(n - 3);
    console.log(n);

    return this.question2Result;
  }

  question3(num) {
    let count = 0;
    while (num) {
      count++;
      num >>= 1;
    }

    return count;
  }

  static func1i = 0;
  func1(n) {
    if (n > 0) {
      ++GateExam.func1i;
      this.func1(n - 1);
    }
    return GateExam.func1i;
  }

  static question5i = 0;
  /**
   * What is the value return question4(5)
   * @param {*} n
   * @returns
   */
  question4(n) {
    if (n > 0) {
      GateExam.question5i += this.func1(n);
      this.question4(n - 1);
    }
    return GateExam.question5i;
  }
}

describe('India GATE exam questions', () => {
  it('Problem #1', () => {
    /**
     * n= 3, 2,1
     * result=[3,1,2,2,1,3,4]
     * d = 1,2,3,4,4
     */
    var start = performance.now();
    expect(new GateExam().question1(3)).toEqual([3, 1, 2, 2, 1, 3, 4, 4, 4]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    expect(new GateExam().question2(6).length).toBe(25);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });

  it('Problem #3', () => {
    /**
     * count =1, 2,3,4,5,6,7,8,9
     * num = 217, 108,54,27,13,6,3,1,0
     */
    var start = performance.now();
    expect(new GateExam().question3(435)).toBe(9);
    var end = performance.now();
    console.log('Problem #3', end - start);
  });
  it('Problem #4', () => {
    var start = performance.now();
    expect(new GateExam().question4(5)).toBe(55);
    var end = performance.now();
    console.log('Problem #4', end - start);
  });
});
