describe("Fizzbuzz", function() {
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("returns fizz instead of 3", function() {
    expect(fizzbuzz.calc(3)).toEqual("fizz");
  });

  it("returns buzz instead of 5", function() {
    expect(fizzbuzz.calc(5)).toEqual("buzz");
  });

  it("returns buzz instead of 15", function() {
    expect(fizzbuzz.calc(15)).toEqual("fizzbuzz");
  });
  it("returns 4 when 4", function() {
    expect(fizzbuzz.calc(4)).toEqual(4);
  });
});