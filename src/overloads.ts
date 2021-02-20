export {};

// シグネチャ
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') return value * 2;

  return value + value;
};

// function Double(value: string):string {
//   return value + value;
// };

console.log(double(100));
console.log(double('Go ')); 
