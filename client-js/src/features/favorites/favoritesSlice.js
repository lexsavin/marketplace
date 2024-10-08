import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  likes: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.likes.push(action.payload)
    },
    deleteFromFavorites: (state, action) => {
      const pos = state.likes.findIndex((id) => id === action.payload)
      state.likes.splice(pos, 1)
    },
  },
})

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions

export const selectLikes = (state) => state.favorites.likes

export default favoritesSlice.reducer
