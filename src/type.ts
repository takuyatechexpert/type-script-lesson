export {};

type User = {
  id: number,
  name: string,
  email: string,
}

// typeのエイリアスを作る事がてinterfaceのように定義もできる
let user: User = {
  id: 1,
  name: 'testくん',
  email: 'testkun@test.com',
}

console.log(user);