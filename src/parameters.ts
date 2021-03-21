export {}

const debugProfile = (name: string, age: number) => {
  console.log({name, age})
}

debugProfile('test', 12)

type Profile = Parameters<typeof debugProfile>

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);