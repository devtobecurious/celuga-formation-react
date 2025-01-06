// 1. Fonction pure
// 2. Thin component (40 à 100 lignes)
// 3. Un element parent retourné (et des enfants) par composant

import { useState } from "react"
import { GetAllFilmsService } from "../services/get-all-films-service"

// export const ListFilms = function() {
//     console.info('ListFilms')

//     // le context d'une function est ? (de base)
//     // this => document

//     return <h1>Liste des films</h1>
// }
export type ToClickEmpty = () => void


export const ListFilms = () => {
    console.info('ListFilms')

    // 1. Ai-je besoin d'un état à surveiller ?
    const [films, setFilms] = useState(new GetAllFilmsService().getAll)
    
    // 2. Le code qui permet de préparer le "html" / jsx/tsx
    const trList = films.map(item => <tr><td>{item.title}</td></tr>)

    const toDelete: ToClickEmpty = () => {
        films.pop()
        setFilms([...films])
        console.info('to delete', films.length)
    }

    // 3. Le return du "html" / jsx/tsx
    // toujours un noeud  parent
    return (
        <> 
            <h1>Liste des films</h1>
            <h2>Des films SW bien sûr</h2>

            { trList.length === 0 && <i>Aucun élément</i> }

            <table>
                <tbody>
                    {trList}
                </tbody>
            </table>

            <button onClick={toDelete}>Delete last row</button>
        </>
    )
}


// créer des fonctions pures !
//export const ListFilms = () => <h1>Liste des films</h1>