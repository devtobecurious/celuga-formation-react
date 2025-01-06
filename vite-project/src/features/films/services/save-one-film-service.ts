import { Film } from "../models/film";

export class SaveOneFilmService {

    /**
     * Save a film (add or edit)
     * @param film not null film
     * @returns 
     */
    saveOne(film: Film): Promise<Film> {
        return new Promise(resolve => {
            setTimeout(() => {
                film.id = 1
                resolve(film)
            }, 1500);
        })
    }
}