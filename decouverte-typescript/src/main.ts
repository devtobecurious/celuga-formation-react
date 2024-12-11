import Wookiee from './wookiee'
import {Category, Film, FilmList} from './ludoteck/models/film'

//let wook = new Wookiee()
// wook = 1



const film = new Film(1, 'ddfsfd', 'sdfsdfsd')
const film2 = new Film(2, 'ddfsfd', undefined, 2015) // , new Category('', ''), new Category('', ''))

const tableauA: Film[] = [film, film2]
const tableau: FilmList = [film, film2]

