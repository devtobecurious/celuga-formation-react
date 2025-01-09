import { Link } from "react-router"

export const MainMenu = () => {
    return (
        <>
            <Link to='/films'>Films</Link>
            <Link to='/films/add'>Nouveau film</Link>
        </>
    )
}