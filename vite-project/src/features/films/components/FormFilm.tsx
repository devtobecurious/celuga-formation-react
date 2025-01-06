import { ChangeEvent, FormEvent, useState } from "react"
import { Film } from "../models/film"

type FormFilmProps = {
    item?: Film,
    onSaveFilm: (film: Film) =>  void
}

export const FormFilm = (props: FormFilmProps) => {
    const [title, setTitle] = useState(props.item ? props.item.title : '')
    const [description, setDescription] = useState(props.item ? props.item.description : '')

    const changeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    }

    const changeDescription = (e: ChangeEvent<HTMLInputElement>): void => {
        setDescription(e.target.value)
    }

    const submitFilm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const film = new Film(0, '', title)
        props.onSaveFilm(film)
    }

    return (
        <>
            <form className="film" onSubmit={submitFilm}>
                <div>
                    <span>Titre : {title}</span>
                    <input type="text" value={title} onChange={changeTitle}></input>
                </div>

                <div>
                    <span>Description : {description}</span>
                    <input type="text" value={description} onChange={changeDescription}></input>
                </div>
                
                <button type="submit">Sauvegarder</button>
            </form>
        </>
    )
}