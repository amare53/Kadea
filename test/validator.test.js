const Validator = require("../Validator.js");
const expect = require("chai").expect;

describe("Validator", () => {
  it("#required", () => {
    const form = { name: "Aime", age: 12 };
    const validator = new Validator(form);
    validator.required("name", "age");
    expect(validator.errors).to.be.empty;
  });

  it("#required fail", () => {
    const validator = new Validator({ name: "Aime" });
    validator.required("name", "age");
    expect(Object.keys(validator.errors)).to.have.lengthOf(1);
    expect(validator.errors.age).to.be.eq("Le champ age est requis");
  });

  it("#required fail with 2 errors", () => {
    const validator = new Validator({});
    validator.required("name", "age");
    expect(Object.keys(validator.errors)).to.have.lengthOf(2);
  });
});
