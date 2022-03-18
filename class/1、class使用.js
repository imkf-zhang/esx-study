class Person {
  name1: "9999"
  constructor(str) {
    this.name1 = str
  }
  say() {
    return this.name1
  }
}

const xiaoming = new Person("小明")

console.log(xiaoming.name1)
console.log(xiaoming.say())

console.log(typeof Person.name)
console.log(Person.name)  // Person

let mmm = class {
  constructor(str) {
    this.sex = str
  }
}
console.log(typeof mmm.name)
console.log(mmm.name) // mmm