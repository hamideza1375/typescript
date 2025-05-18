interface BaseObject {
  id: string;
  user: string;
  [key: string]: any; // سایر properties با هر نام و نوعی
}

const obj1: BaseObject = {
  id: "123",
  user: "john_doe"
};

const obj2: BaseObject = {
  id: "456",
  user: "jane_doe",
  age: 30, // اختیاری
  isActive: true, // اختیاری
  address: { city: "Tehran" } // اختیاری
};


////////////////////


type StrictPart = {
  id: string;
  user: string;
};

type FlexibleObject = StrictPart & Record<string, unknown>;

const obj3: FlexibleObject = {
  id: "789",
  user: "alice",
  role: "admin", // اختیاری
  lastLogin: new Date() // اختیاری
};


////////////////////////////


interface FlexibleObject2<T extends object = {}> {
  id: string;
  user: string;
  extra?: T;
}

const obj4: FlexibleObject2 = {
  id: "101",
  user: "bob"
};

const obj5: FlexibleObject2<{ age: number; active: boolean }> = {
  id: "102",
  user: "eve",
  extra: {
    age: 25,
    active: true
  }
};