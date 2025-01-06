import { Film } from "../models/film"
import { SaveOneFilmService } from "../services/save-one-film-service"
import { FormFilm } from "./FormFilm"

export const EditFilm = () => {
    const filmToBeEdited = new Film(2, 'test 2 desc', 'title 2')

    const saveFilm = async (film: Film): Promise<void> => {
        const service = new SaveOneFilmService()

        const updatedFilm = await service.saveOne(film)
        console.info(updatedFilm)
    }

    return (
        <>
            <h1>Edition d'un film</h1>

            <FormFilm item={filmToBeEdited} onSaveFilm={saveFilm} />
        </>
    )
}