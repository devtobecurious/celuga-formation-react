import { Film, FilmList } from "../models/film";
import { ApiFilmsResult } from "./models";

export class GetAllFilmsService {
    constructor(private getAllFromApi: () => Promise<ApiFilmsResult>) {}

    async getAll(): Promise<FilmList> {
        const apiResult = await this.getAllFromApi()
        return apiResult.result.map(item => new Film(item.uid, item.description, item.properties.title))
    }
}