// 1. Fonction pure
// 2. Thin component (40 à 100 lignes)
// 3. Un element parent retourné (et des enfants) par composant

import { useEffect, useState } from "react"
import { GetAllFilmsService } from "../services/get-all-films-service"
import { Button, Spinner } from "react-bootstrap"
import { getAllFilmsApiServices } from "../services/get-all-films.api.service"
import { FilmList } from "../models/film"

// export const ListFilms = function() {
//     console.info('ListFilms')

//     // le context d'une function est ? (de base)
//     // this => document

//     return <h1>Liste des films</h1>
// }
export type ToClickEmpty = () => void

const service = new GetAllFilmsService(getAllFilmsApiServices)
export const ListFilms = () => {
    console.info('ListFilms')

    // 1. Ai-je besoin d'un état à surveiller ?
    const [films, setFilms] = useState<FilmList>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const list = await service.getAll()
            setFilms(list)
            setIsLoading(false)
          }
          fetchData();
    }, []) // appelé une seule fois au démarrage de mon composant

    // // 2. Le code qui permet de préparer le "html" / jsx/tsx
    const trList = films.map(item => <tr key={item.id}><td>{item.title}</td></tr>)

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

            { isLoading && <Spinner></Spinner>}

            { trList.length === 0 && <i>Aucun élément</i> }

            <table>
                <tbody>
                    {trList}
                </tbody>
            </table>

            {/* <button onClick={toDelete}>Delete last row</button> */}
            { trList.length > 0 && <Button variant="warning" onClick={toDelete}>Delete last row</Button>}
        </>
    )
}


// créer des fonctions pures !
//export const ListFilms = () => <h1>Liste des films</h1>