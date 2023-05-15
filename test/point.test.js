const expect = require("chai").expect;
const Point = require("../Point.js");
describe("Point", () => {
  it("should work", () => {
    const point = new Point(3, 5);
    console.log(point);
    expect(point.x).to.be.eq(3);
  });
});
