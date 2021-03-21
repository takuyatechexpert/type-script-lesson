export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'testくん';
  static lastName: string = 'test';
}

//  let user = new Me;
// console.log(user.isProgrammer);
// console.log(`${user.lastName} ${user.firstName}`);

// static（静的メンバ）を定義するとインスタンス化しなくてもアクセスする事ができる
console.log(Me.isProgrammer);
