class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('I am Foo constructor');
  }

  get fullName() {
    return `${ this.firstName } ${ this.lastName }`;
  }

  set fullName(value) {
    let [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let bar = new Person('Example', 'Examplic');
console.log(bar.fullName);
bar.fullName = 'Something Else';
console.log(bar.fullName);
