import operate from "../logic/operate";

describe("Test for operations", () => {
  it("should return the sum of 1 + 1 = 2", () => {
    const sum = operate(1, 1, "+");
    expect(sum).toBe("2");
  });

  it("should return the minus of 10 - 1 = 9", () => {
    const minus = operate(10, 1, "-");
    expect(minus).toBe("9");
  });

  it("should return the division of 10 ÷ 2 = 5", () => {
    const division = operate(10, 2, "÷");
    expect(division).toBe("5");
  });

  it("should return the multiplication of 10 x 2 = 20", () => {
    const multiplication = operate(10, 2, "x");
    expect(multiplication).toBe("20");
  });
});
