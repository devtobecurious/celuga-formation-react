import { useState } from "react"

export const DisplayTitle = () => {
    const [title, setTitle] = useState('Liste de mes films (test)')

    console.info('Display title')
    // let title = 'Liste de mes films (test)'
    const changeTitle = () => {
        console.info('click')
        setTitle('Mes films !')
    }

    return (
        <>
            <h1>{title}</h1>
            <button onClick={changeTitle}>Change title</button>
        </>
    )
}