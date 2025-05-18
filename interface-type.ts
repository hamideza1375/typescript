interface Person {
  name: string;
  age: number;
  greet(): void;
}

const alice: Person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};


////////////////////


type Person2 = {
  name: string;
  age: number;
  greet(): void;
};

const bob: Person2 = {
  name: "Bob",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};


//////////////////


interface User5 {
  name: string;
}

interface User5 {
  id:any
  age: number;
}

// ترکیب می‌شوند:
const user: User5 = {
  id:1,
  name: "Alice",
  age: 30
};


//////////////////


// type User2 = { name: string };
// type User2 = { age: number }; // Error: Duplicate identifier 'User2'

//////////////////


// Union types
type ID = string | number;

// Tuple types
type Point = [number, number];

// Mapped types
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

// Mapped types
type Optional<T> = { [K in keyof T]?: T[K] }

// Conditional types
type NonNullable2<T> = T extends null | undefined ? never : T



//////////////////////


interface Product {
  id: number
  name: string
}

type PartialProduct = Partial<Product>


///////////////////////////

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  makeSound() {
    console.log("Woof!");
  }
}