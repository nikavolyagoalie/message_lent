import { createSlice } from "@reduxjs/toolkit";
import { fetchMessages } from "../ActionCreators";

// const initialState = {
//     favorites: 
// }

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [
        {
            attachments: [],
            author: "Канал ПЕРВЫЙ",
            channel: "telegrambot",
            content: "Пост пост",
            date: "2022-04-01 13:17:26",
            favorite: false,
            id: "2679",
            region: "",
            senderNumber: "1001692672105",
        },
        {
            attachments: [],
            author: "Канал ПЕРВЫЙ",
            channel: "telegrambot",
            content: "Пwewост пост",
            date: "2022-04-01 11:17:26",
            favorite: false,
            id: "233679",
            region: "",
            senderNumber: "1001692672105",
        },
        {
            attachments: [],
            author: "Канал ПЕРВЫЙ",
            channel: "telegrambot",
            content: "21223Пост пост",
            date: "2022-04-01 14:17:26",
            favorite: false,
            id: "2679sdfds",
            region: "",
            senderNumber: "1001692672105",
        },
    ],
    reducers: {
        clickNewsItem: (state, action) => {
            const idx = state.findIndex(newsItem => newsItem.id === action.payload.id)
            state[idx].favorite = action.payload.favorite
        }
    },
    // extraReducers: {
    //     [fetchMessages.fulfilled.type]: (state, action) => {
    //         state.favorites = action.payload;
    //     }
    // },
})

export const { clickNewsItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;