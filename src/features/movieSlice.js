import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null
    },
    reducers: {
        addPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        }
    }
})

export const { addPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;