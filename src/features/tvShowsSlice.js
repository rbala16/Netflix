import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
    name:"tvShows",
    initialState:{
        topRatedTvShows:null,
    },
    reducers:{
        addTopRatedTvShow:(state, action)=>{
            state.topRatedTvShows = action.payload
        }
    }
})

export const {addTopRatedTvShow} = tvShowsSlice.actions;
export default tvShowsSlice.reducer;