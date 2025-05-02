import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import movieSlice from "../features/movieSlice";
import heroSlice from "../features/heroSlice";
import tvShowsSlice from "../features/tvShowsSlice";
import gptSlice from "../features/gptSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies:movieSlice,
        hero:heroSlice,
        tvShows:tvShowsSlice,
        gpt:gptSlice,
    }
})

export default appStore;