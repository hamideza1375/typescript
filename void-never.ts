// 1. تابع بدون مقدار بازگشتی
function logMessage(message: string): void {
  console.log(message);
}

// 2. متغیر از نوع void
let unusable: void | null = undefined;
unusable = null; // فقط وقتی که strictNullChecks غیرفعال باشد

// 3. تابعی که undefined برمی‌گرداند
function noOp(): void {
  return undefined;
}

///////////////////////


// 1. تابعی که همیشه خطا می‌دهد
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// 2. تابع با حلقه بی‌نهایت
function infiniteLoop(): never {
  while(true) {
    console.log("این تابع هرگز پایان نمی‌پذیرد");
  }
}

// 3. کنترل جریان نوع
function checkType(x: string | number): string | never {
  if (typeof x === "string") {
    return x;
  } else if (typeof x === "number") {
    return x.toString();
  }
  // اینجا نوع x می‌شود never
  return throwError("نوع نامعتبر");
}


//////////////////////


function processUser(user: string | null): void {
  if (user === null) {
    throw new Error("کاربر وجود ندارد!"); // این شاخه never را برمی‌گرداند
  }
  
  console.log(`پردازش کاربر: ${user}`);
  // این تابع به طور عادی void برمی‌گرداند
}

// استفاده
try {
  processUser("Alice"); // کار می‌کند
  processUser(null);    // خطا می‌دهد
} catch (e: any) {
  console.error(e.message);
}