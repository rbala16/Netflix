import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
    name:"hero",
    initialState:{
        trailerVideo:null,
    },
    reducers:{
        addTrailerVideos:(state, action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addTrailerVideos} = heroSlice.actions;
export default heroSlice.reducer;