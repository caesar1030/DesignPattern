import Person from "./Person";

export default class PersonBuilder<N, A> {
  private _name!: N;
  private _age!: A;

  constructor() {}

  setName(name: N) {
    this._name = name;
    return this as PersonBuilder<N, A>;
  }

  setAge(age: A) {
    this._age = age;
    return this as PersonBuilder<N, A>;
  }

  build() {
    if (!this._name || !this._age) {
      throw new Error("Name and age are required");
    }
    return new Person(this._name as string, this._age as number);
  }
}
