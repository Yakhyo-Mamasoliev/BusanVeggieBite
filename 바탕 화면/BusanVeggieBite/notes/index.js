//We can use function inside the object it is called method
const person = {
  //properties
  name: "David",
  age: 22,
  country: "English",
  //using method
  greet() {
    console.log("This is method: ");
  },
  introduce() {
    console.log(`I am ${this.name} and my age is ${this.age} years old`);
  },
};

const a = person.name;
console.log("name of the person is: ", a);

person.greet();
person.introduce();
