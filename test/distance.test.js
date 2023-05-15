const expect = require("chai").expect;
const Distance = require("../Distance");
const Point = require("../Point");
describe("Distance", () => {
  it("should return 11", () => {
    const distance = new Distance(new Point(2, 5), new Point(8, 15));
    expect(distance.calculate()).to.be.eq(11);
  });

  it("should return 12", () => {
    const distance = new Distance(new Point(2, 5), new Point(10, 15));
    expect(distance.calculate()).to.be.eq(12);
  });
});
