export {}

type Profile = {
  name: string,
  age: number
}

type Profile2 = Partial<Profile>;
type Profile3 = Required<Profile>;

interface InterfaceProfile {
  name: string,
  age: number
}

let taro: Profile2 = {
  name: 'taro'
}
console.log(taro.name);
// Mapped types
// map関数みたいに展開して新しく型を作る事ができる
type Optional<T> = { [P in keyof T]?: T[P]}

type OptionalProfile = Optional<Profile>

type SomeTypes = string | number | boolean;
// Excludeで第二引数にしていした型を除外できる
type NonStringAndNumberType = Exclude<SomeTypes, string | number>
type NonStringType = Exclude<SomeTypes, string>

type StringType = Extract<SomeTypes, string>

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
}
// オブジェクトの特定の型を使いたい時はPickを使うExtractではオブジェクトには使えないはず
type simpleProfile = Pick<DetailedProfile, 'name' | 'height'>
// オブジェクトで特定の型を省きたい時に使用する
type smallProfile = Omit<DetailedProfile, 'name'>