export class Film {
    constructor(private _id: number, public description: string, 
                public title: string | number | undefined, public year?: number) {}

    get id() { return this._id }
}

export type FilmList = Film[]

