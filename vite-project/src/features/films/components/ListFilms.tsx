// 1. Fonction pure
// 2. Thin component (40 à 100 lignes)
// 3. Un element parent retourné (et des enfants) par composant

import { GetAllFilmsService } from "../services/get-all-films-service"

// export const ListFilms = function() {
//     console.info('ListFilms')

//     // le context d'une function est ? (de base)
//     // this => document

//     return <h1>Liste des films</h1>
// }

export const ListFilms = () => {
    const service = new GetAllFilmsService()
    const list = service.getAll()
    const trList = list.map(item => <tr><td>{item.title}</td></tr>)

    return (
        <>
            <h1>Liste des films</h1>
            <h2>Des films SW bien sûr</h2>

            { trList.length == 0 && <i>Aucun élément</i> }

            <table>
                <tbody>
                    {trList}
                </tbody>
            </table>
        </>
    )
}


// créer des fonctions pures !
//export const ListFilms = () => <h1>Liste des films</h1>