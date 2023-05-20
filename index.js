class FormeG {
  constructor(h, l) {
    this.h = h;
    this.l = l;
  }
  perimetre() {
    return (this.h + this.l) * 2;
  }
}

class Carre extends FormeG {
  constructor(cote) {
    super(cote, cote);
    this.cote = cote;
  }
  perimetre() {
    return this.cote * 4;
  }
}
class Rect extends FormeG {}

const carre = new Carre(2);
const rect = new Rect(7, 5);

console.log(carre.perimetre());
console.log(rect.perimetre());
