export {};

class VisaCard {
  constructor (public readonly owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('testくん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'test2';
console.log(myVisaCard.owner);
