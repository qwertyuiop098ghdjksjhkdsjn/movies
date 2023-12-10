
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store'
import type { filmByGenre, oneGenre, OneFilm, Film } from '../../types.js'

// Define a type for the slice state
interface MoviesState {
    filmsByGenres: filmByGenre[] 
    genresList: oneGenre[]
    oneFilmInfo: OneFilm | null
    searchFilms: Film[]
}

// Define the initial state using that type
const initialState: MoviesState = {
  filmsByGenres: [],
  genresList: [],
  oneFilmInfo: null,
  searchFilms: []
}

export const MovieSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    setFilmsByGenres: (state, action: PayloadAction<filmByGenre[]>) => {
        state.filmsByGenres = action.payload
    },

    setGenresList: (state, action: PayloadAction<oneGenre[]>) => {
        state.genresList = action.payload
    },

    setOneFilmInfo: (state, action: PayloadAction<OneFilm>) => {
      state.oneFilmInfo = action.payload
    }, 

    setSearchFilms: (state, action: PayloadAction<Film[]>) => {
      state.searchFilms = action.payload
    }
  },
})

export const {setFilmsByGenres, setGenresList, setOneFilmInfo, setSearchFilms} = MovieSlice.actions

export default MovieSlice.reducer


//store - хранилище всех стейтов, всех редьюсеров
//slice - отдельная часть стора, кот. отвечает за хранение и редактирование части стора. 
//reducer - функция, кот. меняет state
//useAppSelector(state => state.movies.filmsByGenres) //получение данных из store
//const dispatch = useAppDispatch() //получили функцию, которая нужна для отправки action
//action creator - это функция, которая принимает то, что лежит в payload и создает action. action - это небольшой объект
//setSearchFilms, setOneFilmInfo, setGenresList, ... - это action creator