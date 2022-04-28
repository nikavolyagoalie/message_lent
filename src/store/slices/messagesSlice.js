import { createSlice } from "@reduxjs/toolkit";
import { fetchMessages } from "../ActionCreators";

const initialState = {
    messages: [],
    isLoading: false,
    error: '',
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    extraReducers: {
        [fetchMessages.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.messages = action.payload;
        },
        [fetchMessages.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchMessages.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

// export const {} = messagesSlice.actions;
export default messagesSlice.reducer;