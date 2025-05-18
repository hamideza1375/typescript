interface User {
  id: number;
  name: string;
  age: number;
}

// با Partial همه فیلدها اختیاری می‌شوند
type PartialUser = Partial<User>;
// معادل:
// {
//   id?: number;
//   name?: string;
//   age?: number;
// }

const userUpdate: PartialUser = {
  name: "New Name" // فقط آپدیت نام را ارسال می‌کنیم
};


///////////////////////////

interface Props {
  a?: number;
  b?: string;
}

const obj: Required<Props> = { a: 5, b: "hello" };
// بدون a یا b خطا می‌دهد


//////////////////////////


type UserRoles = 'admin' | 'user' | 'guest';

type RolePermissions = Record<UserRoles, boolean>;
// معادل:
// {
//   admin: boolean;
//   user: boolean;
//   guest: boolean;
// }

const permissions: RolePermissions = {
  admin: true,
  user: false,
  guest: false
};


///////////////////////////////


type Product2 = {
  id: string;
  price: number;
};

type ProductDatabase = Record<string, Product2>;
// معادل: { [key: string]: Product2 }

const db: ProductDatabase = {
  "prod1": { id: "prod1", price: 100 },
  "prod2": { id: "prod2", price: 200 }
};

//////////////////////


interface User2 {
  name: string;
  age: number;
  email: string;
}

function updateUser(user: User2, fieldsToUpdate: Partial<User2>) {
  return { ...user, ...fieldsToUpdate };
}

const user2 = { name: "Alice", age: 30, email: "alice@example.com" };
updateUser(user2, { age: 31 }); // فقط age را آپدیت می‌کند