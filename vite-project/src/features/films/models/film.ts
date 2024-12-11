import {Years} from '../../../core/custom-types'

export class Category {
    constructor(public id: string, public label: string) {}
}

export class Film {
    private categories: Category[] | undefined

    constructor(private _id: number, public description: string, 
                public title: string | number | undefined, public year?: Years) {
                //...categories: Category[]) {
                    //this.categories = categories
                }

    get id() { return this._id }
}

export type FilmList = Film[]


