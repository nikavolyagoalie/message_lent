import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
  

export const fetchMessages = createAsyncThunk(
    'Messages/fetchAll',
    async (_, thunkAPI) => {
        const bodyFormData = new FormData();
        bodyFormData.append('actionName', 'MessagesLoad');
        try {
            const res = await axios({
                method: "post",
                url: "http://f0665380.xsph.ru/",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            console.log(res);

            let news = Object.values(res.data.Messages).map(item => ({...item, favorite: false}))
            console.log(news)
            
            return news
        } catch (error) {
            return thunkAPI.rejectWithValue("Ошибка загрузки")
        }
    }
)