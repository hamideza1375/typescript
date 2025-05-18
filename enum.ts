enum Direction1 {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

// استفاده
let myDirection: Direction1 = Direction1.Up;
console.log(myDirection); // 0

////////////////////////

enum Direction2 {
  Up = 1,    // 1
  Down,      // 2
  Left,      // 3
  Right      // 4
}

console.log(Direction2.Up); // 1
console.log(Direction2.Left); // 3

///////////////////////////////

enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

console.log(Direction3.Up); // "UP"

//////////////////////////

enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Subscriber = "SUBSCRIBER"
}

function checkAccess(role: UserRole): string {
  switch(role) {
    case UserRole.Admin:
      return "دسترسی کامل";
    case UserRole.Editor:
      return "دسترسی ویرایش";
    case UserRole.Subscriber:
      return "دسترسی محدود";
    default:
      return "دسترسی نامشخص";
  }
}

console.log(checkAccess(UserRole.Admin)); // "دسترسی کامل"