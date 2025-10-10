import { createSlice } from "@reduxjs/toolkit";

const configStore = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers:{
        changeLanguage: (state, action) =>{
            state.lang = action.payload;
        },
    },
});

export const {changeLanguage} = configStore.actions;

export default configStore.reducer;