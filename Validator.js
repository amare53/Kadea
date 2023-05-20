module.exports = class Validator {
  #params;
  errors = [];
  constructor(params) {
    this.#params = params;
  }
  required(...params) {
    for (const param of params) {
      if (!this.#params.hasOwnProperty(param)) {
        this.errors[param] = `Le champ ${param} est requis`;
      }
    }
  }
};
