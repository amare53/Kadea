const Point = require(".");

module.exports = class Distance {
  /**
   * @param {Point} point_1
   */
  #point_1;
  /**
   * @param {Point} point_2
   */
  #point_2;
  constructor(point_1, point_2) {
    this.#point_1 = point_1;
    this.#point_2 = point_2;
  }
  calculate() {
    const a = Math.pow(this.#point_2.x - this.#point_1.x, 2);
    const b = Math.pow(this.#point_2.y - this.#point_1.y, 2);
    return Math.floor(Math.sqrt(a + b));
  }
};
