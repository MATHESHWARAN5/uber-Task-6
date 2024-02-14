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
  
  // UberPriceCalculator class
  class UberPriceCalculator {
    private readonly BASE_FARE: number = 2.0;
    private readonly PER_MILE_COST: number = 1.5;
    private readonly PER_MINUTE_COST: number = 0.25;
  
    calculatePrice(distance: number, duration: number): number {
      const totalCost: number = this.BASE_FARE + (this.PER_MILE_COST * distance) + (this.PER_MINUTE_COST * duration);
      return totalCost;
    }
  }
  
  // Example usage of UberPriceCalculator class
  // const uberCalculator = new UberPriceCalculator();
  // const distance: number = 10;  // in miles
  // const duration: number = 15;  // in minutes
  // const totalPrice: number = uberCalculator.calculatePrice(distance, duration);
  // console.log(`Uber Price: $${totalPrice}`);
  