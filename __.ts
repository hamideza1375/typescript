let numbers: readonly number[] = [1, 2, 3];

interface Book {
  title: string;
  author: string;
}

const book: Readonly<Book> = {
  title: "TypeScript Guide",
  author: "John Doe"
};

// book.title = "New Title"; // خطا

/////////////////////////////


interface Person {
  name: string;
  age: number;
}

// Mapped types
type ReadonlyPerson2 = {
  readonly [K in keyof Person]: Person[K];
};

// {
//   readonly name: string;
//   readonly age: number;
// }

//////////////////////////////

// Mapped types
// این یک Mapped Type عمومی است که تمام ویژگی‌های نوع T را اختیاری می‌کند.

// [K in keyof T]: برای هر کلید در نوع T یک ویژگی جدید می‌سازد.

// ?: هر ویژگی را اختیاری می‌کند.

// T[K]: نوع مقدار هر ویژگی را حفظ می‌کند.
type Optional2<T> = { [K in keyof T]?: T[K] }

interface User {
  id2: string;
  name: string;
}

type OptionalUser = Optional2<User>;

///////////////////////////////

// Conditional types
// را فیلتر می‌کند. undefined یا null است که نوع Conditional Type این یک

// است. undefined یا null شامل T بررسی می‌کند آیا T extends null | undefined:

// را برمی‌گرداند. T برمی‌گرداند (حذف می‌کند)، در غیر این صورت خود never اگر شامل باشد، ? never : T:
type NonNullable3<T> = T extends null | undefined ? never : T


type Example = string | null | undefined;
type Cleaned = NonNullable3<Example>;

// nw nw nw nw 2
