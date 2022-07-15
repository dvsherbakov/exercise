/*function action(): void {
    console.log('abs')
}

function error( message: string): never {
    throw new Error(message)
}*/

class TypeSystem {
    static any: any = null; // Ok
    static number: number = null; // Ok
    static string: string = null; // Ok
    static boolean: boolean = undefined; // Ok
    //static null: null = null; // Ok
    static undefined: undefined = undefined
    static none: unknown = undefined

    //static void: void = action()
    // static never: never = action2()
}

//const af = (arg: any): void => arg


TypeSystem.boolean = TypeSystem.any
let tmp: null = null

const tm: any = '787865 '
TypeSystem.none = tm

console.log(TypeSystem.none);

//error('test error')


const f0 = (): unknown => {
    return
}

console.log('unknown', f0())

type MappedType<T> = {
    [K in keyof T]: T
}

type T1 = MappedType<number>

const t1: T1 = 55;

enum Berries {
    Strawberry = 1, Raspberry, Blueberry = 4, CherryPy
}

const berry = Berries["Blueberry"]
console.log(berry)
//console.log(Berries[1])

enum Stones {
    Peach, Apricot = 'apricot', Cherry = 202, Berry, Plum = 'plum'
}

for (const st in Stones) {
    console.log(st, Stones[st])

}

console.log(typeof Berries)