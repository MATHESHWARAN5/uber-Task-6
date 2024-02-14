// Person class
class Person {
    private name: string;
    private age: number;
    private gender: string;
  
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    displayDetails(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  }
  
  // Example usage of Person class
  // const person = new Person("John Doe", 30, "Male");
  // person.displayDetails();