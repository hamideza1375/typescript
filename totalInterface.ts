interface Employee {
  id: string;
  name: string;
}

interface Manager {
  department: string;
  teamSize: number;
}

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  id: "1",
  name: "Alice",
  department: "IT",
  teamSize: 5
};


//////////////


interface Vehicle2 {
  make: string;
  model: string;
}

interface Car2 extends Vehicle2 {
  doors: number;
  automatic: boolean;
}

const myCar2: Car2 = {
  make: "Toyota",
  model: "Corolla",
  doors: 4,
  automatic: true
};


//////////////////


interface Box2 {
  width: number;
}

interface Box2 {
  height: number;
  depth: number;
}

// نتیجه ادغام:
// {
//   width: number;
//   height: number;
//   depth: number;
// }

const box: Box2 = {
  width: 10,
  height: 20,
  depth: 15
};


/////////////////////


type ID2 = string | number;

interface Person3 {
  id: ID2;
  name: string;
}

type Contact2 = Person3 & {
  email: string;
  phone: string;
};

const contact2: Contact2 = {
  id: 123,
  name: "Alice",
  email: "alice@example.com",
  phone: "123-456-7890"
};


//////////


interface Product1 {
  id: string;
  name: string;
  price: number;
  category: string;
}

// ترکیب Pick و Partial
type ProductPreview = Partial<Pick<Product1, 'id' | 'name'>>;

const preview: ProductPreview = {
  name: "Laptop"
  // id اختیاری است
};

// ترکیب Omit و Readonly
type ReadonlyProduct1 = Readonly<Omit<Product1, 'price'>>;

const readonlyProd1: ReadonlyProduct1 = {
  id: "1",
  name: "Phone",
  category: "Electronics"
};
// readonlyProd.name = "Tablet"; // خطا: readonly


//////////////////////////


type Optional1<T> = {
  [P in keyof T]?: T[P];
};

interface User0 {
  id: string;
  name: string;
  age: number;
}

type OptionalUser1 = Optional1<User0>;

// معادل:
// {
//   id?: string;
//   name?: string;
//   age?: number;
// }

const partialUser: OptionalUser1 = {
  name: "Bob"
};


////////////////


type Size = "small" | "medium" | "large";
type Color = "red" | "green" | "blue";

type ButtonVariant = `${Size}-${Color}`;
// نتیجه: "small-red" | "small-green" | "small-blue" | 
//        "medium-red" | "medium-green" | "medium-blue" | 
//        "large-red" | "large-green" | "large-blue"

const variant: ButtonVariant = "medium-green";




