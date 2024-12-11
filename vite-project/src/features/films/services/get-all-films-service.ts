import { Film, FilmList } from "../models/film";

export class GetAllFilmsService {
    getAll(): FilmList {
        const array: FilmList = [
            new Film(1, 'il était', 'a new hope', 2005),
            new Film(2, 'il était fois', 'Han solo', 2015)
        ]

        return array
    }
}