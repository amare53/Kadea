module.exports = class Point {
  /**
   * permet de save la x
   * @param {int} #x
   */
  #x;

  /**
   * @param {int} #y
   */
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }
};
