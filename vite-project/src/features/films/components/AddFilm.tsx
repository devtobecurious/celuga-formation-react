import { Film } from "../models/film"
import { SaveOneFilmService } from "../services/save-one-film-service"
import { FormFilm } from "./FormFilm"

export const AddFilm = () => {
    const saveFilm = async (film: Film): Promise<void> => {
        const service = new SaveOneFilmService()

        const updatedFilm = await service.saveOne(film)
        console.info(updatedFilm)
    }

    return (
        <>
            <h1>Ajout d'un nouveau film</h1>

            <FormFilm onSaveFilm={saveFilm} />
        </>
    )
}