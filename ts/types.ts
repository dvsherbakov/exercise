/// <reference path="utils.ts"/>

//const myPass = Utils.getPass('John', 42)

const x: [string, number] = ['hello', 10]

console.log(x)

enum Color {
  Red,
  Green,
  Blue,
}

const aC: Color[] = [Color.Blue, Color.Red]

console.log(aC)

const u: unknown = 56

const t: number = typeof u === 'number' ? u : 0

console.log(t, u)

const fU = (px: string): unknown => {
  return px.concat('abc')
}

console.log(typeof fU)

const ox: any = {}

ox.a = 556
ox.b = 'it si b'

const td: number = ox.a

console.log(ox)

console.log(td)

interface User {
  name: string;
}

const user: Readonly<User> = {
  name: 'Toyer',
}

//user.name = 'Arvo'

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }

const obj2: Required<Props> = { a: 66, b: '42' }

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact'

const xR: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'oae 229' },
  home: { title: 'past --' },
}

console.log(xR)

class C {
  x = 0
  y = 0
}

type T0 = InstanceType<typeof C>

const coord: T0 = { x: 50, y: 32 }

//console.log(myPass)
