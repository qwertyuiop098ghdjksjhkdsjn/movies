
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store'
import type { filmByGenre, oneGenre } from '../../types.js'

// Define a type for the slice state
interface MoviesState {
    filmsByGenres: filmByGenre[] 
    genresList: oneGenre[]
}

// Define the initial state using that type
const initialState: MoviesState = {
  filmsByGenres: [],
  genresList: []
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
    }
  },
})

export const {setFilmsByGenres, setGenresList} = MovieSlice.actions

export default MovieSlice.reducer