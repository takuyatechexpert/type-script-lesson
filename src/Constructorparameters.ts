export {}

class Person {

  constructor(public name: string, public age: number) {
  }
}

let me = new Person('test', 23);

console.log(me.name);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>