//export type TypeOrUndefined<T extends { id: number}> = T | undefined
export type TypeOrUndefined<T> = T | undefined

export type NumberOrUndefined = TypeOrUndefined<number>
export type StringOrUndefined = TypeOrUndefined<string>


export type List<T> = T[]

export type Years = 2005 | 2008 | 2015