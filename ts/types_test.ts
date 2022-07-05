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

const tm: any = '7878'
TypeSystem.none = tm

console.log(TypeSystem.none);

//error('test error')
