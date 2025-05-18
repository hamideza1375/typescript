class Person {
  // ویژگی‌های کلاس
  name: string;
  age: number;

  // سازنده (constructor)
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // متد
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// ایجاد نمونه از کلاس
const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I'm 30 years old.


///////////////////////////


class Animal {
  public name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}


////////////////////////////


class BankAccount {
  private balance: number;
  
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  
  public getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
// console.log(account.balance); // خطا: Property 'balance' is private


//////////////////////////////


class Vehicle {
  protected speed: number = 0;
}

class Car extends Vehicle {
  public accelerate() {
    this.speed += 10; // قابل دسترسی در کلاس فرزند
  }
}

const car = new Car();
car.accelerate();
// console.log(car.speed); // خطا: Property 'speed' is protected


////////////////////////


class Circle {
  readonly PI = 3.14;
  readonly radius: number;
  
  constructor(radius: number) {
    this.radius = radius;
  }
  
  get area() {
    return this.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.area); // 78.5
// circle.radius = 10; // خطا: Cannot assign to 'radius' because it is a read-only property


///////////////////////////


class Temperature {
  private _celsius: number = 0;
  
  get celsius() {
    return this._celsius;
  }
  
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero!");
    }
    this._celsius = value;
  }
  
  get fahrenheit() {
    return this._celsius * 9/5 + 32;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77
temp.celsius = -300; // خطا: Temperature below absolute zero!


///////////////////////////////


class Animal2 {
  constructor(public name: string) {}
  
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}


class Dog2 extends Animal2 {
  constructor(name: string, public breed: string) {
    super(name);
  }
  
  bark() {
    console.log("Woof! Woof!");
  }
  
  override move(distance = 5) {
    console.log("Running...");
    super.move(distance);
  }
}

const dog = new Dog2("Buddy", "Golden Retriever");
dog.bark(); // Woof! Woof!
dog.move(); // Running... Buddy moved 5m.


/////////////////////


abstract class Shape {
  abstract get area(): number;
  
  displayArea() {
    console.log(`The area is ${this.area}`);
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  
  get area() {
    return this.side ** 2;
  }
}

const square = new Square(5);
square.displayArea(); // The area is 25

// const shape = new Shape(); // خطا: Cannot create an instance of an abstract class


///////////////////////////////


class Box<T> {
  private content: T;
  
  constructor(value: T) {
    this.content = value;
  }
  
  getValue(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // 42

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Hello



//////////////////////////////////


class MathOperations {
  static PI = 3.14;
  
  static add(a: number, b: number): number {
    return a + b;
  }
  
  static subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(MathOperations.add(5, 3)); // 8
console.log(MathOperations.PI); // 3.14


//////////////////////////////////////


class Student {
  constructor(
    public readonly id: string,
    public name: string,
    private age: number,
    protected courses: string[] = []
  ) {}
  
  enroll(course: string) {
    this.courses.push(course);
  }
}

const student = new Student("1", "Alice", 20);
student.enroll("Math");
// student.id = "2"; // خطا: Cannot assign to 'id' because it is read-only