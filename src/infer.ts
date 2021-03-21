export {}

// 引数に入ってくる関数の返り値の型を拾う
type MyReturnType <T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
