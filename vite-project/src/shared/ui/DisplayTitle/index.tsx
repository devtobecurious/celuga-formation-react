import { useState } from "react"

export const DisplayTitle = () => {

    // setTimeout(() => { // s'exécute après le rendu, car asynchrone aussi
    //     console.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    // }, 0);

    const [title, setTitle] = useState('Liste de mes films (test)') // le premier rendu on a cette valeur

    console.info('Display title')
    // let title = 'Liste de mes films (test)'
    const changeTitle = () => {
        console.info('click')
        // setTitle('Mes films !') // traitement dit asynchrone : toujours après le rendu
        // setTitle(title + ' (test 1)')
        // setTitle(title + ' (test 2)')
        // setTitle(title + ' (test 3)') // ne concatène pas car on reprend toujours la dernière valeur de l'état


        setTitle(prevTitle => prevTitle +  ' (test 1)')
        setTitle(prev => prev +  ' (test 2)')

        console.info('Title', title)
    }

    return (
        <>
            <h1>{title}</h1>
            <button onClick={changeTitle}>Change title</button>
        </>
    )
}